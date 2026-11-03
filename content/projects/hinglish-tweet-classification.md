---
title: "Hinglish Tweet Sentiment Classification"
summary: "NLP classification pipeline to detect and categorize aggression in code-mixed Hinglish tweets across NAG, CAG, and OAG classes."
period: "Minor Project • Manipal University Jaipur"
role: "NLP & ML Engineer"
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
---

### Problem Statement

Social media content moderation pipelines overwhelmingly rely on monolingual NLP models optimized for standardized English or Devanagari Hindi. In India, hundreds of millions of users express themselves using "Hinglish"—a hybrid code-mixed vernacular characterized by Hindi phonetics transliterated into Roman/Latin script, interspersed with English vocabulary, colloquialisms, and non-standard syntax.

Standard tokenizers and sentiment models fail dramatically on Hinglish because the text lacks formal orthographic standards: a single word such as "kyun" can appear with arbitrary phonetic variations ("kyu", "kyuu", "q", "kyn"). Furthermore, while explicit hate speech (Overtly Aggressive - OAG) can sometimes be flagged via basic profanity filters, subtle hostility (Covertly Aggressive - CAG, including passive aggression, veiled insults, and sarcasm) is exceptionally hard to isolate from benign conversation (Non-Aggressive - NAG). The objective was to engineer an end-to-end NLP classification system that accurately ingests, normalizes, and classifies code-mixed tweets into **NAG**, **CAG**, and **OAG** categories.

### Why It Was Interesting

Code-mixing introduces a fundamental linguistic challenge known as code-switching at intrasentential and lexical levels. Because there is no standard dictionary or spelling grammar for Romanized Hindi, vocabulary spaces explode into high-dimensional sparsity. 

Conceptually, differentiating **Covert Aggression (CAG)** from **Non-Aggression (NAG)** requires understanding context and tone rather than simply spotting aggressive keywords. A phrase like *"Bohot badhiya kaam kiya aapne"* can either be genuine praise (NAG) or severe sarcasm/mockery (CAG) depending on syntactic markers and discourse context. Tackling this nuanced three-way classification on social media data represented a compelling challenge at the intersection of computational linguistics and applied machine learning.

### Approach

The project followed a disciplined data and ML engineering lifecycle:
1. **Corpus Ingestion & Data Hygiene**: Cleaned social media tweets by stripping URLs, Twitter handles (`@user`), special characters, and non-standard ASCII noise while preserving punctuation marks that carry emotional or sarcastic signal (e.g., repeated punctuation, question marks).
2. **Text Normalization & Subword Tokenization**: Addressed phonetic variations by experimenting with subword character n-grams and word n-grams rather than strict dictionary tokenization, allowing morphological roots to be recognized despite erratic phonetic spellings.
3. **Feature Extraction**: Generated sparse feature matrices using TF-IDF (Term Frequency-Inverse Document Frequency) with configurable n-gram ranges (1-3 word n-grams and 3-5 character n-grams) to capture both semantic phrases and subword character sequences.
4. **Model Selection & Hyperparameter Optimization**: Trained and benchmarked multiple supervised learning architectures, including Multinomial Naive Bayes, Linear Support Vector Machines (LinearSVC), and Logistic Regression with class-weight rebalancing to counter severe class skew.
5. **Interactive Model Serving**: Built an interactive inference interface using Streamlit, enabling users to test arbitrary code-mixed text, observe predicted class probabilities, and evaluate classification boundaries.

### Architecture

```
[Raw Tweet Input (Romanized Hindi / Hinglish)]
                      │
                      ▼
[Regex Cleaning & Normalization Layer]
  • Handle/URL stripping
  • Case normalization
  • Punctuation token preservation
                      │
                      ▼
[Subword & Word-Level TF-IDF Vectorizer]
  • Word n-grams (1, 2, 3)
  • Character n-grams (3, 4, 5)
                      │
                      ▼
[Supervised Classification Core]
  • Support Vector Classifier / Linear Classifier
  • Confidence score calculation
                      │
                      ▼
[Inference & Output Layer (Streamlit)]
  • Class: NAG (Non-Aggressive)
  • Class: CAG (Covertly Aggressive)
  • Class: OAG (Overly Aggressive)
```

The system is decoupled into an offline training and artifact generation pipeline (pickled vectorizer and trained weight matrices) and a stateless, low-latency inference module embedded within the Streamlit runtime.

### Engineering Challenges

- **Severe Vocabulary Sparsity & Transliteration Drift**: Because users spell words phonetically based on regional accents, identical words generated completely different tokens. Relying solely on word-level tokenization diluted the feature space. Overcame this by blending character n-grams with word n-grams, enabling the model to learn sub-word patterns that persisted across varied phonetic spellings.
- **Class Skew & Boundary Ambiguity for CAG**: In the dataset, covert aggression (CAG) was heavily outnumbered by non-aggressive tweets and overtly abusive tweets, causing naive models to collapse predictions toward the majority class. Tuned cost-sensitive loss functions with balanced class weights and evaluated performance using Macro F1-score rather than accuracy.
- **Resource Constraints in Deployment**: Deploying the model to cloud environments required keeping memory footprints low while ensuring fast tokenization and vectorization under concurrent requests without needing a GPU.

### Potential Improvements

- **Transformer & Multilingual LLM Fine-Tuning**: Fine-tuning specialized multilingual cross-lingual models such as MuRIL (Multilingual Representations for Indian Languages) or HingRoBERTa using LoRA/QLoRA adapters to capture contextual semantics far more effectively than static n-gram representations.
- **Phonetic Normalization Pre-Processor**: Integrating a rule-based phonetic hashing algorithm (adapted Soundex or Double Metaphone for Indo-Aryan languages) to map varied transliterations to canonical phoneme keys before vectorization.
- **Production REST Microservice**: Decoupling the model into a standalone containerized Python inference microservice (FastAPI / Triton Inference Server) with Redis caching for repeated inputs, integrated into a real-time messaging or comment moderation pipeline.
