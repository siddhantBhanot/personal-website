---
title: "ContextFoundry"
summary: "Autonomous Engineering Intelligence & RAG platform bridging microservice codebases, architectural knowledge, and developer onboarding with AST chunking, hybrid vector retrieval, and multi-provider LLM orchestration."
period: "Distributed Systems & AI Platform"
role: "Lead Systems & AI Engineer"
metrics: "Sub-Second TTFT • Dense + BM25 RRF Hybrid Search • Multi-Provider Fallback"
stack:
  - "FastAPI"
  - "Python"
  - "React 19"
  - "TypeScript"
  - "Qdrant"
  - "LlamaIndex"
  - "Docker"
  - "Tailwind CSS"
  - "SSE Streaming"
  - "Mermaid.js"
github: "https://github.com/siddhantBhanot/context-foundry/tree/development"
live: "https://contextfoundry-frontend.onrender.com/"
featured: true
order: 1
---

### Problem Statement

In distributed microservice organizations, technical knowledge is fragmented across multiple git repositories, outdated architecture wiki pages, private communication channels, and undocumented institutional memory ("tribal knowledge"). 

When onboarding new software engineers or investigating cross-cutting system defects, developers face steep hurdles: tracing multi-service transaction flows requires manually parsing disparate repositories across Kotlin, Java, and Python codebases, deciphering undocumented REST contracts, and locating configuration parameters without centralized assistance. Static wikis quickly fall out of sync with production code, while general-purpose consumer LLMs hallucinate non-existent endpoints and lack exact file-and-line citations. The objective of ContextFoundry was to engineer an enterprise-grade Autonomous Engineering Intelligence and Retrieval-Augmented Generation (RAG) platform capable of ingesting diverse microservice codebases, indexing code structure with AST-aware chunking, executing dense and sparse hybrid retrieval, dynamically rendering architecture diagrams, and orchestrating multi-provider LLM inference with zero-downtime failover.

### Why It Was Interesting

Codebase intelligence presents fundamental engineering challenges that standard unstructured text RAG pipelines cannot solve:

1. **Dual Lexical & Semantic Retrieval Needs**: Developer queries alternate between exact identifier lookups (e.g., `@RestController`, endpoint paths, database collection names) and high-level conceptual questions (e.g., *"How is borrower credit score evaluated during pre-approval?"*). Relying solely on dense embeddings misses exact identifier matches, while pure BM25 lexical search misses conceptual semantic synonyms.
2. **AST-Aware Structural Boundaries**: In codebases, arbitrarily splitting source files by token count truncates function signatures, isolates variable declarations from loops, and breaks class hierarchies. Contextual integrity requires AST-aware syntax decomposition across Kotlin, Java, and Python.
3. **Multi-Provider LLM Resilience**: Commercial LLM APIs experience rate limits, transient outages, and latency spikes. An enterprise engineering platform cannot fail when a single model provider experiences upstream downtime; it demands dynamic multi-provider orchestration with automatic, transparent failover across AWS Bedrock, Groq Cloud, and OpenAI without breaking real-time token streams.
4. **Interactive Architecture Synthesis**: Converting retrieved code context into interactive Mermaid sequence diagrams and structured onboarding modules (Knowledge Cafe) bridges the gap between raw implementation code and high-level architectural understanding.

### Approach

ContextFoundry was architected with a decoupled, clean-architecture backend and a high-performance modern web interface:

1. **AST & Header-Aware Ingestion Engine**: Built language-aware code and document chunkers supporting Kotlin (`.kt`, `.kts`), Java (`.java`), Python (`.py`), Markdown (`.md`), and PDF (`.pdf`). Chunkers respect syntactic scopes, class definitions, function signatures, and markdown header hierarchies rather than splitting mid-token.
2. **Hybrid Retrieval (Dense + BM25 RRF)**: Engineered a multi-stage vector search pipeline utilizing 768-dimensional `jinaai/jina-embeddings-v2-base-code` dense embeddings combined with `Qdrant/bm25` sparse lexical search, fused using Reciprocal Rank Fusion (RRF), along with RepoMap blueprint injection and bidirectional 1-hop caller/collaborator expansion.
3. **Multi-Provider Resilient LLM Layer**: Designed an intelligent fallback engine that orchestrates requests across AWS Bedrock (Claude 3.5 Sonnet / 4.6), Groq Cloud (Llama 3.3 70B Versatile), and OpenAI (GPT-4o). If the primary provider encounters rate limits or latency anomalies, the engine seamlessly fails over to backup providers.
4. **Real-Time Streaming & Citation Attribution**: Delivered sub-second Time-to-First-Token (TTFT) using Server-Sent Events (SSE) streaming, coupled with exact file-path, line-number citations, and syntax-highlighted code preview drawers.
5. **Knowledge Cafe (Interactive KT)**: Constructed an interactive onboarding workspace that auto-generates module syllabi, lesson progression, doubt-clearing AI assistants, and automated quizzes from indexed codebase repositories.
6. **Dynamic Diagram Synthesis**: Integrated Mermaid.js compilation directly into the chat streaming cycle, prompting the LLM to generate executable sequence diagrams and entity-relationship models grounded in retrieved code snippets.

### Architecture

```
[ Developer Workspace (React 19 + TypeScript + Tailwind CSS) ]
  • Codebase & Architecture Chat • Knowledge Cafe • Dynamic Mermaid Diagrams
                          │
                          │ HTTP / SSE Token Streaming
                          ▼
[ Backend API Gateway (FastAPI + Async Python 3.12) ]
  • JWT Authentication & RBAC • Async Persistence (aiosqlite)
                          │
                          ▼
[ RAG & Ingestion Engine (LlamaIndex Core) ]
  ┌─────────────────────────────────────────────────────────────┐
  │ • AST-Aware Code Chunkers (Kotlin, Java, Python, Markdown)  │
  │ • Embedding Pipeline (jina-embeddings-v2-base-code)         │
  └──────────────────────────────┬──────────────────────────────┘
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
[ Vector Storage (Qdrant) ]         [ Multi-Provider Fallback LLM ]
  • Clustered Collections             1. AWS Bedrock (Claude 3.5 Sonnet)
  • Tenant / Service Payload Filters  2. Groq Cloud (Llama 3.3 70B)
  • Dense Vectors + BM25 Sparse       3. OpenAI (GPT-4o)
```

The system strictly enforces clean separation of concerns: the Presentation layer communicates with FastAPI via Server-Sent Events; the Domain RAG service manages vector querying and prompt composition; and Infrastructure adapters encapsulate Qdrant client communication and multi-LLM dispatching.

### Engineering Challenges

- **Real-Time Failover on SSE Streams**: Streaming LLM responses via Server-Sent Events (SSE) creates a stateful HTTP connection. If an LLM provider fails after sending partial tokens, switching mid-stream can cause corrupt output. Resolved this by implementing a lightweight pre-flight handshake and buffer window that validates provider health before piping tokens to the client socket, falling back immediately if HTTP 429 or 503 status codes are detected.
- **Tenant & Microservice Isolation in Vector Space**: In an enterprise setting with dozens of microservices, global vector similarity searches frequently retrieve irrelevant code from unrelated repositories. Solved this by structuring Qdrant collections with strict payload metadata filters (`service_id`, `repo_name`, `language`), allowing developers to query a specific microservice context or search cross-cutting architectures globally on demand.
- **AST Parsing Efficiency during Bulk Ingestion**: Ingesting large enterprise repositories containing thousands of source files caused high memory spikes when constructing full Abstract Syntax Trees. Optimized the ingestion worker with async batching, streaming chunk serialization, and memory-capped file processing queues.

### Potential Improvements

- **Tree-Sitter Cross-Repository Call Graph**: Integrate Tree-Sitter to generate deterministic symbol dependency graphs (caller/callee hierarchies, interface implementations) stored in a graph database (e.g., Neo4j), combining graph traversal with vector similarity for multi-hop architectural reasoning.
- **Agentic Code Modification & PR Generation**: Expand the platform into an autonomous coding agent using MCP (Model Context Protocol) tool execution, enabling it to write unit tests, scaffold API controllers, and open verified GitHub Pull Requests directly from chat.
- **Local On-Premises SLM Inference**: Support quantized local small language models (e.g., DeepSeek-Coder, CodeLlama via vLLM) for strictly air-gapped corporate environments requiring zero external API transmission.

