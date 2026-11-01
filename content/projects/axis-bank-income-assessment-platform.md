---
title: "Axis Bank Maximus: Distributed Income Assessment & Lending Engine"
summary: "High-throughput reactive microservices processing 96M+ requests/month and 137K+ customer loan applications across 8+ lending products using Kotlin, Spring WebFlux, Kafka, and a SAGA Step Framework."
period: "Sep 2025 – Present"
role: "Backend Software Development Engineer (Freecharge / Axis Bank)"
metrics: "96M+ requests/month, 137K+ monthly applications, 8+ credit products"
stack: ["Kotlin", "Spring WebFlux", "MongoDB", "Redis", "Apache Kafka", "SAGA Pattern", "Docker"]
featured: true
---

### Architectural Context & Scale
Within Axis Bank’s digital acquisition ecosystem (the **Maximus platform**), the shared **Income Assessment Service** evaluates borrower financial eligibility for pre-approved credit offerings and digital loan applications across **8+ product verticals**, including:
- Home Loans
- Business Loans
- Auto Loans
- Personal Loans
- Credit Cards

The service operates under heavy production load, processing over **96M+ requests per month** while supporting **137K+ active borrower applications**.

### Engineering Decisions & Implementation
- **Reactive Event-Loop Architecture**: Built using **Kotlin** and **Spring WebFlux (Project Reactor)**. By leveraging non-blocking asynchronous I/O rather than traditional thread-per-request models, the service achieves minimal heap utilization and near-zero thread blocking even during month-end traffic surges.
- **Distributed SAGA-based Step Framework**: Implemented multi-stage loan qualification workflows (document parsing, banking turnover computation, salary credit detection) orchestrated via an internal SAGA Step Framework, ensuring transactional atomicity across distributed boundaries with compensating rollback actions.
- **Dynamic Runtime Version Resolution**: Led the core architectural refactoring allowing the shared Income Assessment service to dynamically resolve business rule versions per lending product at runtime. This decoupled product-specific releases, allowing hotfixes on personal loans without requiring re-testing or redeployment across business or auto loans.
- **Third-Party Account Aggregator Reliability**: Managed mission-critical integrations with **Perfios Anumati** account aggregators, implementing resilient circuit breakers, retry strategies, and failover fallbacks to prevent third-party gateway timeouts from interrupting user onboarding.
