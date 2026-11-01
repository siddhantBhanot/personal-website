---
title: "PostgreSQL Indexing Internals: B-Tree vs. BRIN for Large Datasets"
summary: "Understanding block-level indexing for append-mostly time-series tables, comparing memory footprints, and tuning fillfactor."
date: "2026-09-28"
tags: ["PostgreSQL", "Database Internals", "Performance Tuning"]
readingTime: "5 min read"
difficulty: "Deep Dive"
---

## The Growth Problem of Standard B-Trees

In high-volume backend applications (audit logs, IoT telemetry, transaction records), tables grow past hundreds of millions of rows. 

A standard **B-Tree index** maintains a balanced tree structure where every single row has a corresponding entry pointing to its tuple ID `(page, offset)`.

### Why B-Trees Hurt on Append-Only Massive Tables
1. **Index Size Exceeds RAM**: Once the index grows past `shared_buffers`, random disk reads spike dramatically.
2. **Write Amplification**: Every insert must update the B-Tree page, triggering page splits and WAL generation.

### Enter BRIN (Block Range Index)
BRIN indexes are designed for columns that are physically correlated with their disk layout—such as auto-incrementing IDs or `created_at` timestamps.

Instead of indexing every single tuple, BRIN stores the `(min_val, max_val)` for each range of physical disk blocks (default: 128 pages = 1MB).

```sql
CREATE INDEX idx_audit_logs_created_at_brin 
ON audit_logs 
USING brin (created_at) 
WITH (pages_per_range = 64);
```

### Benchmark Comparison (100 Million Rows)

| Index Type | Index Size | Write Overhead | Query Latency (Range Scan) |
| :--- | :--- | :--- | :--- |
| **Standard B-Tree** | ~2.1 GB | High (tree splits) | ~4ms |
| **BRIN Index** | **~64 KB** | Negligible | ~12ms |

### Production Advice
Use BRIN when:
- The data is append-only and strictly ordered by timestamp or sequence ID.
- The table size is in tens of gigabytes or larger.
- The small difference in scan time (4ms vs 12ms) is worth saving multiple gigabytes of memory cache.
