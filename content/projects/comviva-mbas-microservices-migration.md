---
title: "Comviva mBAS: Telecom Monolith to TMF Microservices Migration"
summary: "Deconstructing a legacy mobile billing & subscription platform for Vodafone India into decoupled Spring Boot microservices with TM Forum (TMF) compliant open APIs."
period: "Jan 2024 – Jul 2025"
role: "Senior Product Development Engineer (Comviva)"
metrics: "30%–50% API response latency reduction, TMF compliant, automated reporting"
stack: ["Java", "Spring Boot", "Docker", "MySQL", "Cron", "Swagger", "SonarQube"]
featured: true
---

### Architectural Context & Challenges
Comviva’s **Mobile Billing and Subscription (mBAS)** platform manages subscriber lifecycle events, recurring subscription billing, and bundle renewals for major telecom operators, notably **Vodafone India**. 

The legacy platform operated as a tightly coupled monolithic codebase where feature additions carried significant regression testing overhead and database contention under peak billing windows.

### Engineering Decisions & Implementation
- **Microservices Decomposition**: Guided the systematic extraction of billing, reporting, and subscriber notification modules into autonomous **Spring Boot microservices**, communicating via standard RESTful contracts aligned with **TM Forum (TMF) Open API standards**.
- **Performance Optimization**: Engineered response payload compression (gzip) and query-level pagination across critical subscriber history endpoints, achieving a measurable **30%–50% reduction in end-to-end API response latency**.
- **Automated Subscription Reconciliation**: Built client-specific reporting microservices automated via Docker and containerized Cron workflows, generating and dispatching daily reconciliation statements with zero manual engineering intervention.
- **Enterprise Security & Auth**: Hardened administrative interfaces by integrating **Spring Security with JWT tokens and enterprise LDAP** directory services for centralized role-based access control (RBAC).
