export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: WorkExperience[] = [
  {
    role: "Backend Software Development Engineer",
    company: "FreechargeBiz",
    location: "Gurugram, India",
    period: "Sep 2025 – Present",
    bullets: [
      "Engineer backend services for the Maximus platform powering Axis Bank’s digital customer acquisition and pre-approved credit offerings, primarily within the Business Loan and Income Assessment microservices. The shared Income Assessment Service processes over 96M+ requests/month and supports 137K+ customer applications across 8+ lending products.",
      "Develop and maintain reactive microservices using Kotlin, Spring WebFlux, MongoDB, Redis, and Kafka in a distributed architecture leveraging an internal SAGA-based Step Framework.",
      "Led the refactoring of the shared Income Assessment Service to support dynamic runtime version resolution for 8+ lending products including Home Loan, Business Loan, Auto Loan, Personal Loan, and Credit Card, enabling product-specific hotfix deployments, reducing regression testing scope, and accelerating release cycles.",
      "Designed and implemented a reusable Spring WebFilter for AES-based request/response encryption and decryption of exposed APIs, ensuring compliance with RBI security guidelines; adopted across 8+ lending microservices.",
      "Provided production support and incident resolution for critical income assessment workflows and third-party integrations including Perfios Anumati, ensuring reliable customer onboarding experiences.",
      "Created Markdown-based technical documentation for the Step Framework and Income Assessment Service, enabling AI-assisted development through custom GitHub Copilot MCP servers; the same artifacts are being extended for internal RAG-based knowledge pipelines.",
    ],
  },
  {
    role: "Senior Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Jan 2024 – Jul 2025",
    bullets: [
      "Delivered client-specific functionalities for Comviva’s Mobile Billing and Subscription (mBAS) platform for Vodafone India.",
      "Led the migration of a legacy monolithic platform to a microservices-based architecture with TMF-compliant APIs.",
      "Developed Spring Boot microservices and client-specific APIs for subscription reporting, leveraging Docker and Cron for automation.",
      "Mentored new hires (ComCubs) through knowledge transfer, code reviews, and engineering best practices.",
    ],
  },
  {
    role: "Product Development Intern → Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Feb 2022 – Dec 2023",
    bullets: [
      "Developed a React.JS based GUI application for the Mobile Billing and Subscription Management platform with backend authentication and authorization using Spring Security, JWT, and LDAP.",
      "Improved API response time by 30%–50% through payload compression and pagination.",
      "Contributed to backend integration and unit testing, authored API documentation using Swagger and Confluence, improved code quality through SonarQube driven analysis and refactoring.",
    ],
  },
];
