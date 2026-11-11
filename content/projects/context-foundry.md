---
title: "ContextFoundry"
summary: "RAG platform for microservice codebases bridging code repositories, architectural knowledge, and developer onboarding with AST chunking, hybrid vector retrieval, and multi-provider LLM fallback."
period: "Personal Project • Python, FastAPI"
role: "Personal Project"
metrics: "Dense + BM25 RRF Hybrid Search • AST Chunking • Multi-Provider Fallback"
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
image: "/images/projects/context-foundry.png"
---

### Problem Statement

In distributed microservice organizations, technical knowledge is fragmented across multiple git repositories, outdated architecture wikis, and undocumented institutional memory. Tracing multi-service transaction flows across Kotlin, Java, and Python codebases is manual and error-prone, while generic consumer LLMs hallucinate endpoints and lack codebase-level citations. ContextFoundry was built to provide a codebase-aware RAG platform with grounded Q&A, dynamic architecture visualization, and structured onboarding.

### Why It Was Interesting

- **Dual Lexical & Semantic Retrieval**: Developer queries alternate between exact identifier lookups (`@RestController`, route paths) and conceptual questions, requiring both sparse keyword search and dense semantic vector matching.
- **AST-Aware Structural Boundaries**: Arbitrarily splitting code by token count breaks function scopes and class hierarchies; requires AST-aware syntax decomposition across languages.
- **Multi-Provider Resilience**: Commercial LLMs experience rate limits and downtime, requiring transparent fallback across AWS Bedrock, Groq, and OpenAI without dropping Server-Sent Events (SSE) token streams.

### Approach

- **AST-Aware Ingestion**: Built structural chunkers for Kotlin (`.kt`, `.kts`), Java (`.java`), Python (`.py`), and Markdown (`.md`) that preserve syntactic scopes and header hierarchies.
- **Hybrid Retrieval (Dense + BM25 RRF)**: Combined 768D dense code embeddings (`jina-embeddings-v2-base-code`) with `Qdrant/bm25` sparse lexical search via Reciprocal Rank Fusion (RRF) and bidirectional 1-hop expansion.
- **Multi-Provider Fallback**: Orchestrated fallback across AWS Bedrock (Claude 3.5 Sonnet), Groq (Llama 3.3 70B), and OpenAI (GPT-4o) with SSE token streaming.
- **Interactive Learning & Diagrams**: Integrated live Mermaid.js sequence diagram synthesis and Knowledge Cafe onboarding modules with automated quizzes.

### Architecture

```
[Developer Workspace (React 19 + TypeScript + Tailwind)]
                     │ (SSE Token Streaming)
                     ▼
[Backend Gateway (FastAPI + Async Python 3.12 + JWT)]
                     │
                     ▼
[RAG Engine (LlamaIndex + AST Code Chunkers)]
        ┌────────────┴────────────┐
        ▼                         ▼
[Vector Store (Qdrant)]   [Multi-Provider LLMs]
 Dense + BM25 Sparse       Bedrock / Groq / OpenAI
```

Enforces clean separation between presentation, FastAPI gateway, domain RAG pipelines, and infrastructure vector adapters.

### Engineering Challenges

- **Multi-Provider Fallback**: Handled rate limits (HTTP 429) and upstream provider outages across AWS Bedrock, Groq, and OpenAI, routing to backup models before initiating streaming tokens.
- **Repository Isolation**: Segmented Qdrant collections with metadata payload filters (`service_id`, `repo_name`) to keep vector retrieval strictly scoped to the selected codebase.
- **Large Repository Chunking**: Processed code files asynchronously in batches to parse AST syntax trees without excessive memory consumption.

### Potential Improvements

- **Tree-Sitter Call Graphs**: Integrate Tree-Sitter with graph databases (Neo4j) for cross-repository caller/callee traversal.
- **Agentic Code Editing**: Extend with Model Context Protocol (MCP) tool execution to scaffold controllers, generate tests, and open pull requests.
- **Local SLM Support**: Embed quantized models (DeepSeek-Coder via vLLM) for air-gapped on-premises deployments.
