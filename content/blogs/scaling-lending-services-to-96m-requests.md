---
title: "Scaling Digital Lending Services to 96M+ Monthly Requests: Architectural Lessons"
summary: "Operating core credit underwriting and income assessment platforms for Axis Bank: reactive event loops, dynamic version routing, and managing third-party aggregator latency."
date: "2026-10-10"
tags: ["Fintech", "Distributed Systems", "Architecture", "Scale"]
readingTime: "8 min read"
---

## The Reality of Production Lending at Scale

When evaluating credit risk across millions of borrowers, latency and reliability are not abstract engineering ideals—they directly impact whether a customer waiting on an Axis Bank checkout or loan application gets approved or abandons the flow.

Our shared Income Assessment service processes over **96 million requests per month** while supporting **137,000+ active loan applications** across 8+ different lending products (Home Loans, Business Loans, Auto Loans, Personal Loans, and Credit Cards).

Here are the key architectural lessons learned from operating this infrastructure.

### 1. Reactive Streams Prevent Cascade Failures Under Surges
During seasonal flash sales or festive promotions, traffic spikes 4x over baseline in minutes. 

With traditional blocking I/O, a momentary slowdown in an external credit bureau or banking statement API exhausts server thread pools, causing incoming requests to queue, timeout, and crash the service.

By building on **Spring WebFlux and Kotlin with Project Reactor**, incoming requests never block OS worker threads. Even when downstream account aggregators experience transient latencies, the service continues ingesting and scheduling operations gracefully.

### 2. Decouple Multi-Product Workflows with Dynamic Runtime Resolution
When an Income Assessment engine is shared across 8+ lending products, the biggest engineering bottleneck is often not hardware scale—it's release coordination.

If Personal Loans needs an urgent rule hotfix, having a monolithic deployment pipeline means regression testing Home Loans, Auto Loans, and Business Loans before pushing to production.

Refactoring the service to support **Dynamic Runtime Version Resolution** allowed product teams to declare versioned rule matrices at runtime. Personal loans could deploy v2.4 hotfixes independently while Home loans remained stabilized on v2.1, reducing regression testing overhead by over 70%.

### 3. Treat Third-Party Gateways as Inherently Unreliable
Fintech services depend heavily on external entities (Perfios Anumati account aggregators, credit bureaus, regulatory document registries). 

Always implement:
- Aggressive socket and connect timeouts.
- Circuit breakers to fast-fail rather than accumulate connection backlogs.
- Idempotent fallback queues to safely reconcile asynchronous webhook callbacks.

