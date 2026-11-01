---
title: "Real-Time Event Streaming & Ingestion Engine"
summary: "Decoupled CDC (Change Data Capture) and event-streaming backbone handling 200M+ daily events with Kafka and PostgreSQL."
period: "2024"
role: "Core Platform Engineer"
metrics: "200M+ events/day, 99.99% delivery guarantee, 42% latency reduction"
stack: ["Kafka", "Go", "PostgreSQL", "Debezium", "Kubernetes"]
github: "https://github.com/"
featured: true
---

### Architecture & Design Decisions
- Leveraged Debezium CDC on PostgreSQL WAL logs to stream data mutations directly into Kafka topics without dual-write inconsistency.
- Implemented partition key hashing algorithms ensuring strict ordering per customer ID while maintaining even consumer group parallelization.
- Created idempotent consumer patterns with deduplication tables in Redis for zero accidental double executions.

