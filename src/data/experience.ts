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
    role: "Backend Software Development Engineer",
    company: "FreechargeBiz (Axis Bank)",
    location: "Gurugram, India",
    period: "Sep 2025 – Present",
    type: "Full-time",
    description: "Engineering core backend services for the Maximus platform powering Axis Bank’s digital customer acquisition and pre-approved credit offerings, primarily within the Business Loan and shared Income Assessment microservices.",
    highlights: [
      "Engineered shared Income Assessment services processing over 96M+ requests/month and supporting 137K+ customer applications across 8+ lending products.",
      "Developed reactive, non-blocking microservices using Kotlin, Spring WebFlux, MongoDB, Redis, and Apache Kafka in a distributed architecture leveraging an internal SAGA-based Step Framework.",
      "Architected dynamic runtime version resolution for 8+ credit products (Home Loan, Business Loan, Auto Loan, Personal Loan, Credit Card), unlocking product-isolated hotfix deployments, cutting regression test cycles, and accelerating releases.",
      "Designed and implemented a reusable Spring WebFilter for AES-based request/response payload encryption and decryption, satisfying RBI security compliance across 8+ microservices.",
      "Delivered production incident resolution and SLA stability for mission-critical income workflows and third-party integrations including Perfios Anumati account aggregators.",
      "Authored Markdown technical schemas for the Step Framework and Income Assessment service, enabling custom GitHub Copilot MCP servers and internal enterprise RAG knowledge pipelines.",
    ],
    technologies: [
      "Kotlin",
      "Spring WebFlux",
      "Java",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "SAGA Pattern",
      "Reactive Streams",
      "AES Encryption",
      "Docker",
    ],
  },
  {
    role: "Senior Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Jan 2024 – Jul 2025",
    type: "Full-time",
    description: "Delivered enterprise backend functionalities and architectural refactoring for Comviva’s flagship Mobile Billing and Subscription (mBAS) platform for Vodafone India.",
    highlights: [
      "Led the architectural migration of legacy monolithic billing platforms to a decoupled microservices-based ecosystem with TMF-compliant open APIs.",
      "Engineered Spring Boot microservices and automated subscription reporting pipelines utilizing Docker and Cron job scheduling.",
      "Mentored junior engineers (ComCubs) via structured technical knowledge transfer, deep code reviews, and distributed design principles.",
      "Recognized with multiple ACE (Appreciation for Commitment & Effort) cards by engineering leadership for dependable execution and system reliability.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "MySQL",
      "Docker",
      "Cron",
      "Swagger",
      "SonarQube",
      "Jenkins",
      "Kibana",
    ],
  },
  {
    role: "Product Development Intern → Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Feb 2022 – Dec 2023",
    type: "Full-time",
    description: "Developed secure backend authentication pipelines and administrative portals for telecom billing and subscriber lifecycle operations.",
    highlights: [
      "Built centralized backend authentication and authorization subsystems using Spring Security, JWT tokens, and enterprise LDAP directory integration.",
      "Engineered a React.JS administrative portal interfacing with backend subscription services.",
      "Reduced API response latencies by 30%–50% across high-traffic endpoints by implementing payload compression (gzip) and database pagination.",
      "Authored standardized API specifications with Swagger/Confluence, led unit/integration testing with Mockito and JUnit, and eliminated technical debt with SonarQube static analysis.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "LDAP",
      "MySQL",
      "Hibernate",
      "React.JS",
      "Mockito",
      "JUnit",
      "SonarQube",
    ],
  },
];
