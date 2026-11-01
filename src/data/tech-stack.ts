export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Primary" | "Proficient" | "Familiar";
    note?: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages & Core Runtimes",
    description: "Core JVM and multi-paradigm languages used for enterprise backend development.",
    skills: [
      { name: "Java", level: "Primary", note: "Spring Boot, multithreading, enterprise APIs" },
      { name: "Kotlin", level: "Primary", note: "Coroutines, Spring WebFlux, concise reactive code" },
      { name: "SQL", level: "Primary", note: "Complex indexing, query optimization, pagination" },
      { name: "Python", level: "Proficient", note: "Scripting, data modeling, automation" },
      { name: "JavaScript / TypeScript", level: "Proficient", note: "Node.js, React.JS, Next.JS full-stack interfaces" },
      { name: "C++", level: "Familiar", note: "Data structures, algorithmic foundations" },
    ],
  },
  {
    category: "Frameworks & Backend Architecture",
    description: "Reactive and enterprise frameworks for high-throughput distributed microservices.",
    skills: [
      { name: "Spring Boot", level: "Primary", note: "Microservices, REST APIs, TMF standards" },
      { name: "Spring WebFlux", level: "Primary", note: "Non-blocking reactive event loops, 96M+ req/mo" },
      { name: "Spring Security", level: "Primary", note: "JWT, LDAP integration, RBAC" },
      { name: "SAGA Step Framework", level: "Primary", note: "Distributed transaction orchestration & recovery" },
      { name: "Hibernate / JPA", level: "Proficient", note: "ORM, transaction boundaries, caching" },
      { name: "React.JS & Next.JS", level: "Proficient", note: "Administrative dashboards & modern UI" },
    ],
  },
  {
    category: "Databases & Event Streaming",
    description: "Document, relational, cache, and messaging systems tuned for financial throughput.",
    skills: [
      { name: "MongoDB", level: "Primary", note: "Document datastores for lending workflows" },
      { name: "Redis", level: "Primary", note: "Low-latency distributed caching, sessions" },
      { name: "Apache Kafka", level: "Primary", note: "Event-driven architecture & asynchronous messaging" },
      { name: "MySQL", level: "Primary", note: "Relational modeling, transactions, InnoDB" },
      { name: "Elasticsearch", level: "Proficient", note: "Distributed indexing & search queries" },
    ],
  },
  {
    category: "DevOps, Cloud & Testing Tools",
    description: "Automation, CI/CD, performance benchmarks, and code quality analysis.",
    skills: [
      { name: "Docker", level: "Primary", note: "Containerization, microservices deployment" },
      { name: "Git", level: "Primary", note: "Branching strategies, hotfixes, version control" },
      { name: "Jenkins", level: "Proficient", note: "CI/CD build pipelines & automated releases" },
      { name: "SonarQube", level: "Primary", note: "Static code analysis & vulnerability prevention" },
      { name: "Postman", level: "Primary", note: "API testing, contract verification" },
      { name: "Kibana", level: "Proficient", note: "Distributed log aggregation & incident triage" },
      { name: "Apache JMeter", level: "Proficient", note: "Load testing & concurrency benchmarking" },
      { name: "Mockito, Mockk & JUnit", level: "Primary", note: "Unit & integration test suites" },
    ],
  },
  {
    category: "Engineering Concepts & Methodologies",
    description: "Architectural disciplines and industry compliance standards applied in production.",
    skills: [
      { name: "Distributed Systems & SAGA", level: "Primary", note: "Orchestration, compensating transactions" },
      { name: "Reactive Programming", level: "Primary", note: "Project Reactor, non-blocking I/O backpressure" },
      { name: "High-Level & Low-Level Design", level: "Primary", note: "HLD/LLD, SOLID, Gang of Four design patterns" },
      { name: "RBI Security Compliance", level: "Primary", note: "AES-based API payload encryption filters" },
      { name: "TMF-Compliant APIs", level: "Proficient", note: "Telecommunications open digital architecture" },
      { name: "Microservices Decomposition", level: "Primary", note: "Monolith extraction, domain boundaries" },
    ],
  },
];
