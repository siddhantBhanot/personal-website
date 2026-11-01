---
title: "Distributed Rate Limiter & Traffic Shaper"
summary: "High-throughput token bucket & sliding window rate limiter designed for 150k+ RPS with Redis clusters and local caching."
period: "2025"
role: "Lead Backend Architect"
metrics: "150,000+ RPS, < 1.8ms p99 latency, zero false positives"
stack: ["Go", "Redis", "gRPC", "Docker", "Prometheus"]
github: "https://github.com/"
featured: true
---

### Architecture & Design Decisions
- Utilized Redis Lua scripting for atomic execution of sliding window logs, eliminating distributed race conditions.
- Added a two-tier in-memory token bucket on local Go nodes with sync intervals to prevent Redis hot-key throttling.
- Integrated circuit breaker fallbacks ensuring that even in case of full Redis cluster failover, traffic is gracefully degraded rather than dropped.
