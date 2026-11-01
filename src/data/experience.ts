export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: WorkExperience[] = [
  {
    role: "Senior Backend Engineer",
    company: "ScaleTech Solutions",
    location: "Bengaluru, India",
    period: "2024 - Present",
    type: "Full-time",
    description: "Leading the core platform team responsible for distributed transaction processing, high-concurrency ingestion pipelines, and database reliability.",
    highlights: [
      "Architected an event-driven ingestion pipeline processing 150k+ events/sec using Kafka and Go microservices, reducing end-to-end latency by 42%.",
      "Redesigned the primary PostgreSQL cluster sharding and index strategy, cutting p99 query latencies from 180ms down to 14ms under peak traffic.",
      "Implemented a distributed rate limiter and circuit breaker across 25+ microservices, mitigating cascading failures during flash sales.",
    ],
    technologies: ["Go", "Kafka", "PostgreSQL", "Redis", "gRPC", "Docker", "Kubernetes", "AWS"],
  },
  {
    role: "Backend Software Engineer",
    company: "CloudCore Systems",
    location: "Gurugram, India",
    period: "2022 - 2024",
    type: "Full-time",
    description: "Built scalable REST & gRPC APIs, background asynchronous workers, and managed cloud-native microservices.",
    highlights: [
      "Engineered a distributed task scheduler handling 2M+ scheduled jobs daily with at-least-once delivery guarantees using Redis Streams and Go workers.",
      "Optimized memory footprint and connection pooling in legacy Java/Spring Boot services, lowering cloud infrastructure costs by $18,000/year.",
      "Introduced OpenTelemetry distributed tracing and custom Prometheus alerting, reducing Mean Time to Detection (MTTD) by 60%.",
    ],
    technologies: ["Java", "Spring Boot", "Go", "PostgreSQL", "Redis", "RabbitMQ", "Prometheus", "Grafana"],
  },
  {
    role: "Associate Software Engineer",
    company: "FinFlow Technologies",
    location: "Delhi NCR, India",
    period: "2021 - 2022",
    type: "Full-time",
    description: "Developed and maintained payment integration services, ledger reconciliation workflows, and secure client-facing APIs.",
    highlights: [
      "Built idempotent payment processing webhook consumers ensuring zero double-credits across third-party gateway timeouts.",
      "Automated end-to-end reconciliation jobs for financial transactions, reducing nightly run durations from 4 hours to 35 minutes.",
      "Collaborated with security audits to enforce strict OAuth2.0 and mutual TLS (mTLS) inter-service communication.",
    ],
    technologies: ["Python", "FastAPI", "MySQL", "Redis", "Docker", "Git", "Linux"],
  },
];

