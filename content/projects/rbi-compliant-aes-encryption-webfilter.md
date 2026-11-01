---
title: "Reusable AES Request/Response Encryption WebFilter"
summary: "High-performance reactive WebFilter providing automated AES encryption and decryption for exposed APIs to ensure compliance with Reserve Bank of India (RBI) financial security mandates."
period: "2025"
role: "Backend Software Development Engineer (Freecharge)"
metrics: "Adopted across 8+ lending microservices, 100% RBI compliance, sub-millisecond overhead"
stack: ["Kotlin", "Spring WebFlux", "AES-256", "Cryptography", "Reactive Streams"]
featured: true
---

### Architectural Context & Security Mandate
The Reserve Bank of India (RBI) mandates strict data protection and end-to-end encryption for customer financial metadata and personal identifiable information (PII) transmitted across digital lending APIs.

Implementing encryption individually inside each controller or service was error-prone, risked leaking unencrypted payload logging, and imposed significant code duplication across disparate lending microservices.

### Engineering Decisions & Implementation
- **Non-Blocking Reactive Filter**: Designed a modular **Spring WebFilter** operating directly on Project Reactor's `ServerWebExchange` reactive data buffers (`DataBufferUtils`). This allowed streaming decryption on incoming request payloads and automated encryption on outgoing responses without buffering entire multi-megabyte payloads in memory.
- **Pluggable & Zero-Boilerplate**: Packaged as a shared library that microservice teams could import with a single annotation, abstracting away secret key rotation, initialization vector (IV) handling, and tampering verification.
- **Enterprise Adoption**: Successfully rolled out across **8+ critical lending microservices**, ensuring seamless regulatory audit compliance with negligible overhead (< 1ms per transaction).
