---
title: "Hinglish Tweet Sentiment Classification"
summary: "NLP classification pipeline to detect and categorize aggression in code-mixed Hinglish tweets across NAG, CAG, and OAG classes."
period: "Minor Project • Manipal University Jaipur"
role: "Academic Project • Manipal University Jaipur"
metrics: "3-Class Multiclass NLP • Live Streamlit App"
stack:
  - "Python"
  - "NLP"
  - "Scikit-Learn"
  - "Streamlit"
  - "TF-IDF"
  - "Multiclass Classification"
github: "https://github.com/siddhantBhanot/Hinglish-tweet-classification/tree/master"
live: "https://hinglish-tweet-classification.streamlit.app/"
featured: true
order: 4
image: "/images/projects/hinglish-tweet.webp"
---

### Problem Statement

Content moderation models are designed for standardized English or Devanagari Hindi, failing on "Hinglish"—a code-mixed vernacular combining Hindi phonetics in Latin script with English vocabulary and colloquialisms. Words have erratic phonetic spellings (e.g., *"kyun"*, *"kyu"*, *"kyn"*), and covert hostility (Covert Aggression - CAG, including sarcasm) is difficult to distinguish from benign conversation (NAG) and overt abuse (OAG). The goal was to build an end-to-end NLP classification system categorizing code-mixed tweets into **NAG**, **CAG**, and **OAG**.

### Why It Was Interesting

- **Intrasentential Code-Switching**: Lacking standardized orthography, Romanized Hindi creates high-dimensional vocabulary sparsity.
- **Subtle Pragmatic Nuance**: Phrases like *"Bohot badhiya kaam kiya"* can be genuine praise (NAG) or biting sarcasm (CAG) based on subtle discourse context.
- **Resource-Constrained Serving**: Delivering low-latency multiclass classification on CPU-constrained serverless runtimes.

### Approach

- **Corpus Cleaning & Preservation**: Stripped handles and URLs while preserving emotional punctuation signals (question marks, exclamation marks).
- **Subword Character & Word N-Grams**: Extracted combined 1-3 word and 3-5 character TF-IDF n-grams to capture semantic phrases and subword roots resilient to phonetic variation.
- **Supervised Model Optimization**: Trained and benchmarked Naive Bayes, LinearSVC, and Logistic Regression with balanced class weights to counter severe class skew.
- **Interactive Deployment**: Built an interactive Streamlit inference app displaying real-time class probabilities and decision boundaries.

### Architecture

```
[Hinglish Tweet] ──► [Regex Cleaning Layer] ──► [Word & Character TF-IDF (1-3 words, 3-5 chars)]
                                                            │
                                                            ▼
[Streamlit UI: NAG / CAG / OAG Probs] ◄── [Calibrated Classifier (LinearSVC / LogReg)]
```

Decoupled offline artifact generation (pickled vectorizers and models) from stateless online inference.

### Engineering Challenges

- **Transliteration Drift**: Resolved arbitrary phonetic spellings by blending character n-grams with word n-grams, enabling morphological root recognition.
- **CAG Class Imbalance**: Addressed sparse covert aggression samples by tuning cost-sensitive loss functions and evaluating against Macro F1 rather than accuracy.
- **Inference Optimization**: Optimized model serialization to keep inference lightweight on CPU containers.

### Potential Improvements

- **Transformer Fine-Tuning**: Fine-tune cross-lingual multilingual LLMs (MuRIL or HingRoBERTa) with LoRA/QLoRA for deeper contextual semantics.
- **Phonetic Hashing Pre-Processor**: Integrate Double Metaphone or Indic Soundex hashing to normalize phonetic spelling variants before tokenization.
- **Production REST Container**: Package the model into a containerized FastAPI or Triton service with Redis caching for real-time comment moderation.
