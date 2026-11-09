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

During the peak of the COVID-19 pandemic, healthcare advisories, quarantine guidelines, testing methodologies, and symptom guidance evolved rapidly. Public health portals hosted extensive FAQ repositories, but traditional lexical keyword search tools frequently failed to assist users.

Citizens seeking urgent advice phrased their questions colloquially (e.g., *"My throat tickles and I have chills, should I isolate?"* or *"Can I get infected again if I already had it?"*). Because these natural queries rarely matched the exact formal terminology found in official documentation (e.g., *"COVID-19 symptomatic transmission protocols"*), users received empty search results or irrelevant articles. The objective was to build a semantic question-answering retrieval engine that understands conversational intent, measures semantic vector similarity, and delivers accurate, verified health guidance in real time.

### Why It Was Interesting

This project was developed before the advent of ubiquitous generative LLMs, focusing on dense semantic representation and vector similarity search. The technical core required embedding unstructured text into continuous high-dimensional vector spaces and computing mathematical proximity in real time.

The primary engineering intrigue lay in:
- Overcoming the lexical gap where queries and FAQ entries share zero keywords yet convey identical semantic meaning.
- Executing dense vector embeddings and cosine similarity comparisons within a lightweight web framework under interactive latency requirements.
- Establishing rigorous confidence thresholding to prevent dangerous false-positive answers to critical healthcare inquiries.

### Approach

1. **Knowledge Corpus Preparation**: Curated and structured a comprehensive dataset of verified COVID-19 Q&A entries sourced from credible health organizations (WHO, CDC, Ministry of Health), standardizing question-answer pairs and metadata.
2. **Dense Vector Representation via USE**: Leveraged Google's Universal Sentence Encoder (USE) via TensorFlow Hub, which encodes natural language sentences into 512-dimensional dense embedding vectors trained on diverse conversational corpora.
3. **Offline Embedding Pre-computation**: Generated and saved the 512D embedding vectors for all knowledge base questions in memory during startup, eliminating redundant matrix calculations during live inference.
4. **Real-Time Similarity Matching**: Implemented a lightweight Python Flask HTTP service. When a user submits an arbitrary natural language query, the backend encodes the input into a 512D vector and computes cosine similarity against the pre-indexed FAQ vector matrix using optimized vector dot products.
5. **Confidence Scoring & Safety Fallbacks**: Evaluated the top-$K$ similarity scores against a strict confidence threshold. If the highest score exceeds the cutoff, the corresponding verified answer is returned; otherwise, the engine safely triggers a fallback response directing the user to official medical hotlines.

### Architecture

```
[User Natural Language Query]
              │
              ▼
[Flask REST API Endpoint]
              │
              ▼
[Google Universal Sentence Encoder (USE)]
  • Maps query string to 512D dense vector
              │
              ▼
[Vector Similarity Engine (NumPy Linear Algebra)]
  • Broadcast dot-product against pre-computed FAQ vectors
  • Cosine similarity calculation
              │
              ▼
[Confidence Evaluator & Ranker]
  ├─► [Score >= Threshold]: Returns top-ranked verified FAQ answer
  └─► [Score < Threshold]: Triggers safety fallback with emergency contacts
              │
              ▼
[Interactive Web Chat Client]
```

The architecture decouples the static knowledge base embedding phase from the real-time inference path, ensuring sub-millisecond similarity computation once the query vector is generated.

### Engineering Challenges

- **Inference Latency & Cold-Start Memory Overhead**: Google's Universal Sentence Encoder TensorFlow computational graph has a non-trivial memory footprint and takes several seconds to initialize. Initializing the model per HTTP request resulted in unacceptable latency. Solved by architecting the model loader as an application singleton that boots once during server initialization and resides in memory.
- **Minimizing False Positives on Medical Inquiries**: In healthcare applications, a confident but incorrect answer is significantly worse than admitting lack of knowledge. Tuned the cosine similarity threshold empirically ($> 0.65$) to ensure the chatbot only asserts answers when semantic confidence is rigorous.
- **Handling Out-of-Domain and Ambiguous Inputs**: Users frequently submitted one-word questions or topics unrelated to COVID-19. Implemented input validation and graceful fallback handling to guide users back to relevant healthcare queries.

### Potential Improvements

- **Vector Database Integration (FAISS / Milvus)**: For larger knowledge bases containing tens of thousands of medical articles, replacing in-memory NumPy matrix multiplication with Facebook AI Similarity Search (FAISS) or Milvus to support sub-millisecond Approximate Nearest Neighbor (ANN) search with HNSW indexes.
- **Bi-Encoder + Cross-Encoder Re-Ranking Pipeline**: Implementing a two-stage retrieval pipeline where a dense bi-encoder retrieves top-20 candidates, followed by a fine-tuned cross-encoder that re-scores pairs for even higher semantic precision.
- **Reactive Microservice Architecture**: Migrating the Python Flask backend to a high-concurrency Spring WebFlux or FastAPI service leveraging ONNX Runtime for hardware-accelerated, non-blocking model execution.

