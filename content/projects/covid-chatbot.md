---
title: "Covid Q&A Chatbot"
summary: "Semantic retrieval chatbot built with Python Flask and Google's Universal Sentence Encoder to match user queries with verified healthcare FAQs."
period: "Healthcare NLP Project"
role: "Backend & NLP Engineer"
metrics: "512D Semantic Vectors • Sub-20ms Cosine Retrieval"
stack:
  - "Python"
  - "Flask"
  - "TensorFlow Hub"
  - "Universal Sentence Encoder"
  - "NumPy"
  - "REST APIs"
github: "https://github.com/siddhantBhanot/Covid-Chatbot"
featured: true
order: 2
---

### Problem Statement

During the COVID-19 pandemic, public health guidelines evolved rapidly across large FAQ repositories. Keyword search engines failed because colloquial citizen queries (*"throat tickles and chills, should I isolate?"*) rarely matched formal medical terminology (*"symptomatic transmission protocols"*), resulting in empty search results. The goal was to build a semantic question-answering retrieval engine that maps conversational intent to verified healthcare guidance in real time.

### Why It Was Interesting

- **Lexical Gap**: Bridging queries and FAQ entries that share zero common keywords yet convey identical semantic meaning.
- **Dense Vector Search**: Executing 512D embeddings and cosine similarity comparison under sub-20ms latency constraints on a lightweight web service.
- **High-Stakes Safety**: Implementing strict confidence thresholds to prevent false positives on critical medical guidance.

### Approach

- **Corpus Standardization**: Structured verified COVID-19 Q&A entries from WHO, CDC, and health ministries into clean question-answer pairs.
- **512D Dense Embeddings**: Utilized Google's Universal Sentence Encoder (USE) via TensorFlow Hub to map conversational text to 512-dimensional continuous vectors.
- **Pre-Computed Vector Indexing**: Embedded knowledge base entries in-memory at startup to eliminate redundant matrix transformations during inference.
- **Real-Time Similarity & Fallback**: Exposed a Flask REST API that computes cosine similarity via NumPy vector dot products, returning top verified answers when confidence exceeds 0.65 or triggering official medical hotlines.

### Architecture

```
[User Query] ──► [Flask REST API] ──► [Google USE (512D Vector)]
                                              │
                                              ▼
[Interactive Chat] ◄── [Confidence Gate] ◄── [NumPy Cosine Similarity Engine]
                       (Score >= 0.65: FAQ Answer | < 0.65: Emergency Fallback)
```

Decoupled offline knowledge embedding from the real-time inference path for sub-20ms response times.

### Engineering Challenges

- **Model Cold-Start & Memory**: The TensorFlow USE graph has high initialization overhead; resolved by architecting the loader as a persistent in-memory singleton.
- **False Positive Mitigation**: Calibrated empirical similarity cutoffs ($> 0.65$) to ensure the engine only asserts answers when confidence is statistically rigorous.
- **Out-of-Domain Inputs**: Handled ambiguous or off-topic queries with input validation and graceful fallback handling to guide users back to verified healthcare topics.

### Potential Improvements

- **HNSW Vector Indexing**: Migrate in-memory NumPy dot-products to FAISS or Qdrant for scalable sub-millisecond Approximate Nearest Neighbor (ANN) search.
- **Bi-Encoder + Cross-Encoder Pipeline**: Add a lightweight cross-encoder re-ranking stage to evaluate the top candidates for higher semantic precision.
- **Reactive Runtime Migration**: Re-platform from Flask to Spring WebFlux or FastAPI with ONNX Runtime for hardware-accelerated non-blocking execution.

