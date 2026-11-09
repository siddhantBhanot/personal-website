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
      { name: "Java", level: "Primary", note: "Spring Boot, multithreading, enterprise backend" },
      { name: "Kotlin", level: "Primary", note: "Spring WebFlux, coroutines, reactive microservices" },
      { name: "JavaScript", level: "Proficient", note: "Full-stack interfaces & modern web runtimes" },
      { name: "Python", level: "Proficient", note: "Data processing, machine learning & scripting" },
      { name: "C++", level: "Familiar", note: "Data structures, algorithms & problem solving" },
      { name: "SQL", level: "Primary", note: "Relational queries, index optimization & schema design" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", level: "Primary", note: "Enterprise microservices & REST APIs" },
      { name: "Spring WebFlux", level: "Primary", note: "Reactive non-blocking event-driven services" },
      { name: "Spring Security", level: "Primary", note: "JWT, LDAP, RBAC & API authorization" },
      { name: "Hibernate", level: "Proficient", note: "ORM, persistence & transaction management" },
      { name: "React.js", level: "Proficient", note: "Component architecture & web dashboards" },
      { name: "Next.js", level: "Proficient", note: "Full-stack React framework & App Router" },
    ],
  },
  {
    category: "Databases & Messaging",
    skills: [
      { name: "MySQL", level: "Primary", note: "Relational schema design, transactions & indexing" },
      { name: "Redis", level: "Primary", note: "In-memory caching, distributed locks & session store" },
      { name: "Apache Kafka", level: "Primary", note: "High-throughput event streaming & pub/sub" },
      { name: "Elasticsearch", level: "Proficient", note: "Distributed full-text search & log indexing" },
      { name: "MongoDB", level: "Primary", note: "Document datastores for high-scale workflows" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Primary", note: "Version control, branching & release workflows" },
      { name: "Docker", level: "Primary", note: "Container packaging & microservice deployment" },
      { name: "Jenkins", level: "Proficient", note: "Continuous integration & deployment pipelines" },
      { name: "Kibana", level: "Proficient", note: "Log analytics & distributed tracing dashboards" },
      { name: "Postman", level: "Primary", note: "API testing, automated suites & documentation" },
      { name: "Mockito", level: "Primary", note: "Unit test mocking framework for Java" },
      { name: "MockK", level: "Primary", note: "Idiomatic mocking library for Kotlin" },
      { name: "JUnit", level: "Primary", note: "Unit & integration testing assertions" },
      { name: "SonarQube", level: "Primary", note: "Static code analysis & code quality gates" },
      { name: "Apache JMeter", level: "Proficient", note: "Load testing, concurrency & performance benchmarking" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "LLD", level: "Primary", note: "Low-Level Design & object-oriented decomposition" },
      { name: "HLD", level: "Primary", note: "High-Level Design & distributed architecture" },
      { name: "Microservices", level: "Primary", note: "Domain boundaries & service decomposition" },
      { name: "REST APIs", level: "Primary", note: "Stateless HTTP API design & versioning" },
      { name: "Reactive Programming", level: "Primary", note: "Non-blocking backpressure & Project Reactor" },
      { name: "Distributed Systems", level: "Primary", note: "Resilience, eventual consistency & fault tolerance" },
      { name: "Event-Driven Architecture", level: "Primary", note: "Asynchronous pub/sub & decoupled processing" },
      { name: "SAGA Pattern", level: "Primary", note: "Distributed transaction orchestration & compensation" },
      { name: "SOLID Principles", level: "Primary", note: "Clean, maintainable object-oriented architecture" },
      { name: "Object-Oriented Design", level: "Primary", note: "Encapsulation, polymorphism & modularity" },
      { name: "Design Patterns", level: "Primary", note: "GoF creational, structural & behavioral patterns" },
      { name: "System Design", level: "Primary", note: "Scalability, high availability & low latency" },
    ],
  },
];
