export interface TechCategory {
  category: string;
  description?: string;
  skills: {
    name: string;
    level?: "Primary" | "Proficient" | "Familiar";
    note?: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Kotlin", level: "Primary", note: "Spring WebFlux, coroutines, reactive microservices" },
      { name: "Java", level: "Primary", note: "Spring Boot, multithreading, enterprise backend" },
      { name: "Python", level: "Proficient", note: "Async FastAPI, LlamaIndex, data processing & ML" },
      { name: "JavaScript", level: "Proficient", note: "Full-stack interfaces & modern web runtimes" },
      { name: "SQL", level: "Primary", note: "Relational queries, index optimization & schema design" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", level: "Primary", note: "Enterprise microservices & REST APIs" },
      { name: "Spring WebFlux", level: "Primary", note: "Reactive non-blocking event-driven services" },
      { name: "Spring Security", level: "Primary", note: "JWT, LDAP, RBAC & API authorization" },
      { name: "FastAPI", level: "Proficient", note: "Async Python backend & SSE streaming" },
      { name: "React.js", level: "Proficient", note: "Component architecture & web dashboards" },
    ],
  },
  {
    category: "Databases & Messaging",
    skills: [
      { name: "MongoDB", level: "Primary", note: "Document datastores for high-scale workflows" },
      { name: "Redis", level: "Primary", note: "In-memory caching, distributed locks & session store" },
      { name: "Apache Kafka", level: "Primary", note: "High-throughput event streaming & pub/sub" },
      { name: "MySQL", level: "Primary", note: "Relational schema design, transactions & indexing" },
      { name: "Elasticsearch", level: "Proficient", note: "Distributed full-text search & log indexing" },
      { name: "Qdrant", level: "Proficient", note: "Vector database for dense embeddings & hybrid search" },
    ],
  },
  {
    category: "AI / LLM",
    skills: [
      { name: "RAG", level: "Proficient", note: "Retrieval-Augmented Generation & hybrid search" },
      { name: "Hybrid Retrieval", level: "Proficient", note: "Dense + BM25 fused with RRF" },
      { name: "Embeddings", level: "Proficient", note: "Dense code & semantic sentence vectors" },
      { name: "MCP", level: "Proficient", note: "Model Context Protocol & tool integration" },
      { name: "LLM Orchestration", level: "Proficient", note: "Multi-provider fallback & streaming" },
      { name: "LlamaIndex", level: "Proficient", note: "Data ingestion, AST chunkers & retrieval" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Primary", note: "Version control, branching & release workflows" },
      { name: "Docker", level: "Primary", note: "Container packaging & microservice deployment" },
      { name: "Jenkins", level: "Proficient", note: "Continuous integration & deployment pipelines" },
      { name: "Kibana", level: "Proficient", note: "Log analytics & distributed tracing dashboards" },
      { name: "JUnit", level: "Primary", note: "Unit & integration testing assertions" },
      { name: "Mockito", level: "Primary", note: "Unit test mocking framework for Java" },
      { name: "MockK", level: "Primary", note: "Idiomatic mocking library for Kotlin" },
      { name: "SonarQube", level: "Primary", note: "Static code analysis & code quality gates" },
      { name: "JMeter", level: "Proficient", note: "Load testing, concurrency & performance benchmarking" },
      { name: "Maven", level: "Primary", note: "Build lifecycle & dependency management" },
      { name: "Gradle", level: "Primary", note: "Kotlin & Java multi-project build automation" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "Microservices", level: "Primary", note: "Domain boundaries & service decomposition" },
      { name: "REST APIs", level: "Primary", note: "Stateless HTTP API design & versioning" },
      { name: "Reactive Programming", level: "Primary", note: "Non-blocking backpressure & Project Reactor" },
      { name: "Distributed Systems", level: "Primary", note: "Resilience, eventual consistency & fault tolerance" },
      { name: "Event-Driven Architecture", level: "Primary", note: "Asynchronous pub/sub & decoupled processing" },
      { name: "SAGA Pattern", level: "Primary", note: "Distributed transaction orchestration & compensation" },
    ],
  },
];
