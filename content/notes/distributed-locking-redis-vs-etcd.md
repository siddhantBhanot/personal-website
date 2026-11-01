---
title: "Distributed Locking: Why Redlock is Not Always the Right Choice"
summary: "An in-depth analysis of consensus, clock drift, GC pauses, and comparing Redis single-instance locks with Etcd Raft leases."
date: "2026-10-18"
tags: ["Distributed Systems", "Redis", "Etcd", "Consensus"]
readingTime: "7 min read"
difficulty: "Advanced"
---

## The Illusion of the Perfect Distributed Lock

In distributed architectures, multiple workers frequently contend for the same shared resource—such as releasing an invoice or settling an inventory balance.

A common pattern is grabbing a lock in Redis via:

```bash
SET resource_name my_random_token NX PX 30000
```

While this works for simple mutual exclusion where occasional double-execution causes no catastrophic harm, it is dangerous in strict linearizability scenarios.

### The Clock Drift & GC Pause Problem

Consider Martin Kleppmann's critique of distributed locks:

1. Client A acquires the lock for 30 seconds.
2. Client A experiences a 35-second Stop-The-World (STW) JVM Garbage Collection pause or process freeze.
3. The lock TTL expires in Redis.
4. Client B requests and obtains the lock.
5. Client A wakes up from GC, unaware that time has elapsed, and proceeds to perform its write.

**Both Client A and Client B now write concurrently to the protected storage.**

### The Fencing Token Solution

To protect storage from split-brain scenarios, we must introduce monotonically increasing **Fencing Tokens**:

```
Client A: Acquires lock -> Receives Token 34
Client B: Acquires lock -> Receives Token 35
Storage: Rejects any write with Token <= 35
```

When Client A finally attempts to write with Token 34 after its long pause, the storage layer rejects the mutation because Token 35 has already been committed.

### When to Use Redis vs Etcd / ZooKeeper

| Metric / Attribute | Redis (Single / Sentinel) | Etcd (Raft Consensus) |
| :--- | :--- | :--- |
| **Consensus Model** | Asynchronous replication | Strong consensus (Raft quorum) |
| **Throughput** | Extremely high (> 100k ops/sec) | Moderate (disk write bounded) |
| **Failure Safety** | Vulnerable on failover race | Strict CP consistency |
| **Best For** | Rate limiting, deduping jobs | Leader election, critical state locks |

### Key Takeaway for Production
If a duplicate write creates a minor duplicate job that is idempotent, a lightweight Redis lock is appropriate. But if financial balances, unique ledger operations, or cluster leader elections are at stake, always default to Etcd leases with Raft consensus and fencing tokens.

