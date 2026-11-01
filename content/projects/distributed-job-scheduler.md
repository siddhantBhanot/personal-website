---
title: "Distributed Cron & Job Execution Platform"
summary: "Fault-tolerant task scheduler handling 2M+ scheduled jobs daily with Redis Streams, leader election, and worker auto-recovery."
period: "2023 - 2024"
role: "Backend Engineer"
metrics: "2M+ daily tasks, at-least-once guarantee, automatic failover < 3s"
stack: ["Java", "Spring Boot", "Redis Streams", "Docker", "Prometheus"]
github: "https://github.com/"
featured: false
---

### Architecture & Design Decisions
- Replaced monolithic cron instances with a decentralized leader-follower model using Redis leases.
- Leveraged Redis Streams consumer groups with acknowledge (`XACK`) and pending entries lists (`XPENDING`) to auto-reclaim orphan tasks from dead worker pods.
- Exposed metrics into Prometheus with custom Grafana dashboards tracking execution jitter and retry queues.

