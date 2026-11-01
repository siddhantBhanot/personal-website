---
title: "Cache Stampede & Thundering Herd: 4 Practical Mitigations"
summary: "What happens when an expensive cache key expires under 10k RPS, and how Probabilistic Early Expiration (XFetch) saves your database."
date: "2026-08-14"
tags: ["Caching", "Redis", "High Concurrency", "System Reliability"]
readingTime: "6 min read"
difficulty: "Intermediate"
---

## What is a Cache Stampede?

When an ultra-hot cached entity (e.g., home feed config or product inventory with 10k RPS) expires at time `T`, all incoming requests miss the cache simultaneously.

Thousands of worker threads simultaneously execute the heavy SQL query or RPC call to re-warm the cache. The primary database CPU spikes to 100%, cascading into connection pool exhaustion and complete system downtime.

### Mitigation Strategies

#### 1. Mutex Locking (Singleflight Pattern)
In Go, `golang.org/x/sync/singleflight` guarantees that only one in-flight request executes the expensive generator function:

```go
var requestGroup singleflight.Group

v, err, _ := requestGroup.Do(cacheKey, func() (interface{}, error) {
    return fetchFromDatabase(ctx, cacheKey)
})
```

#### 2. Probabilistic Early Expiration (Optimal Algorithm: XFetch)
Instead of waiting for the key to hard expire, calculate a probabilistic refresh window before expiration:

$$\Delta - \beta \cdot \ln(\text{rand}()) \le 0$$

Where $\beta > 0$ controls how aggressively the item is refreshed ahead of expiration time.

#### 3. Background Asynchronous Re-warming
Decouple the client reads from cache invalidation. A background worker periodically re-populates hot keys 60 seconds before expiration.

#### 4. Stale-While-Revalidate (SWR) Pattern
Return the expired value immediately to 9,999 callers, while sending 1 background goroutine to refresh the cache.
