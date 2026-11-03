---
title: "Reactive Backend Architecture: Spring WebFlux & Kotlin Under 96M+ Monthly Requests"
summary: "Comparing thread-per-request blocking architectures (Tomcat / Spring MVC) with non-blocking event-loop runtimes (Netty / WebFlux) for high-scale API gateways."
date: "2026-08-20"
tags: ["Reactive Programming", "Spring WebFlux", "Kotlin", "High Throughput"]
readingTime: "6 min read"
difficulty: "Advanced"
---

## The Thread-per-Request Ceiling

In standard Spring MVC applications running on embedded Apache Tomcat, each incoming HTTP request is assigned a dedicated operating system thread from a thread pool (typically 200 threads).

When an endpoint calls downstream dependencies (database queries, Redis cache lookups, third-party account aggregators like Perfios):
- The thread sits completely idle in a blocked state waiting for I/O.
- At 10,000 concurrent requests, thread stack memory overhead (1MB per thread = 10GB of RAM) and CPU context-switching overhead bring server throughput to a halt.

### The Non-Blocking Event-Loop Model

**Spring WebFlux** (backed by Project Reactor and Netty) fundamentally changes this dynamic:
- It runs on a small, fixed pool of worker threads (typically equal to the number of CPU cores).
- Threads never block on I/O. When an external network call or MongoDB query is executed, Netty registers a selector callback and immediately returns the worker thread to process other incoming client requests.
- When the downstream data buffer arrives, Netty signals the reactor pipeline to resume execution on an available event-loop thread.

### Kotlin Coroutines: Asynchronous Power with Synchronous Readability

While standard Project Reactor code can suffer from "callback complexity" (`flatMap`, `zip`, `switchIfEmpty`), combining **Spring WebFlux with Kotlin Coroutines** provides the ideal balance:

```kotlin
@RestController
@RequestMapping("/api/v1/income")
class IncomeAssessmentController(
    private val assessmentService: AssessmentService
) {
    @PostMapping("/evaluate")
    suspend fun evaluateEligibility(
        @RequestBody request: AssessmentRequest
    ): AssessmentResponse {
        // Looks like standard blocking procedural code,
        // but non-blocking suspension under the hood
        return assessmentService.computeEligibility(request)
    }
}
```

### Production Rules of Thumb
1. **Never Block the Event Loop**: Even a single `Thread.sleep()` or blocking JDBC call on a Netty worker thread stalls all concurrent requests assigned to that event loop. Use reactive drivers (`r2dbc`, reactive MongoDB).
2. **Backpressure Handling**: Ensure downstream consumer pipelines utilize reactive backpressure operators (`onBackpressureBuffer`, `limitRate`) to prevent fast producers from overwhelming downstream storage engines.

