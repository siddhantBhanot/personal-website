export interface TechCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Primary", "Proficient", "Familiar"
    note?: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages & Runtimes",
    description: "Core backend development languages, focusing on concurrency and memory management.",
    skills: [
      { name: "Go (Golang)", level: "Primary", note: "Goroutines, channels, microservices" },
      { name: "Java", level: "Primary", note: "Spring Boot, JVM tuning, multithreading" },
      { name: "Python", level: "Proficient", note: "FastAPI, async workers, scripts" },
      { name: "SQL", level: "Primary", note: "Complex queries, EXPLAIN ANALYZE, indexing" },
      { name: "TypeScript", level: "Proficient", note: "Node.js, tooling & frontend APIs" },
    ],
  },
  {
    category: "Databases & Storage Engines",
    description: "Relational, document, and key-value datastores tuned for high throughput and consistency.",
    skills: [
      { name: "PostgreSQL", level: "Primary", note: "B-Trees, partitioning, MVCC, replicas" },
      { name: "Redis", level: "Primary", note: "Caching, Pub/Sub, sorted sets, Redlock" },
      { name: "MySQL", level: "Proficient", note: "InnoDB engine, replication topologies" },
      { name: "MongoDB", level: "Proficient", note: "Document models, aggregation pipelines" },
      { name: "Elasticsearch", level: "Proficient", note: "Inverted indexes, log search" },
    ],
  },
  {
    category: "Streaming & Messaging",
    description: "Asynchronous communication, event backbones, and message broker architectures.",
    skills: [
      { name: "Apache Kafka", level: "Primary", note: "Partitions, consumer groups, exact-once" },
      { name: "RabbitMQ", level: "Proficient", note: "Routing keys, dead-letter queues" },
      { name: "Redis Streams", level: "Primary", note: "Consumer groups, lightweight streaming" },
      { name: "gRPC & Protocol Buffers", level: "Primary", note: "High-performance RPC, HTTP/2" },
    ],
  },
  {
    category: "Infrastructure & Cloud",
    description: "Containerization, orchestration, and continuous deployment workflows.",
    skills: [
      { name: "Docker", level: "Primary", note: "Multi-stage builds, container security" },
      { name: "Kubernetes", level: "Proficient", note: "Deployments, services, configmaps" },
      { name: "AWS", level: "Proficient", note: "ECS, EKS, RDS, SQS, S3, IAM, VPC" },
      { name: "Linux / Shell", level: "Primary", note: "Bash, debugging, system diagnostics" },
      { name: "CI / CD", level: "Proficient", note: "GitHub Actions, automated test pipelines" },
    ],
  },
  {
    category: "Observability & Reliability",
    description: "Distributed tracing, telemetry, monitoring, and proactive error tracking.",
    skills: [
      { name: "Prometheus", level: "Primary", note: "Custom metrics, SLI/SLO alerts" },
      { name: "Grafana", level: "Primary", note: "System dashboards, latency heatmaps" },
      { name: "OpenTelemetry", level: "Proficient", note: "Distributed trace propagation" },
      { name: "Sentry", level: "Proficient", note: "Exception capturing & triage" },
    ],
  },
];

