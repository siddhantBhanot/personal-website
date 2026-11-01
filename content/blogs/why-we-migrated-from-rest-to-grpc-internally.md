---
title: "Why We Swapped Internal REST for gRPC (and When You Shouldn't)"
summary: "How binary Protocol Buffers and HTTP/2 multiplexing cut inter-service network bandwidth by 55% and eliminated contract drift."
date: "2026-07-22"
tags: ["gRPC", "Networking", "Microservices", "Protobuf"]
readingTime: "6 min read"
---

## The Bottlenecks with JSON over HTTP/1.1

As our internal microservices ecosystem scaled beyond 20 services, JSON serialization overhead and connection handshake latency began showing up prominently in our distributed trace flame graphs.

Every single HTTP/1.1 call incurred:
1. Repetitive TCP connection establishments or head-of-line blocking on keep-alive pools.
2. Huge JSON textual payloads sending identical string keys (`"transaction_id"`, `"timestamp"`, `"metadata"`).
3. Runtime contract drift where API callers and producers disagreed on optional vs required fields.

## The gRPC Solution

By migrating critical inter-service paths to gRPC:
- **Strict Strongly-Typed Contracts**: `.proto` files are the single source of truth across Go, Java, and Python services.
- **Binary Wire Format**: Protocol Buffers compress messages into dense binary encodings, reducing network payloads by ~55%.
- **Multiplexing over Single TCP Connection**: HTTP/2 allows concurrent streams without connection pool starvation.

## When Should You Keep REST?
If you are exposing public-facing APIs to third-party developers, standard REST over JSON remains unbeatable for developer ergonomics, browser debugging, and ecosystem tooling.

