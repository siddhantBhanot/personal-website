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
      "Scaled shared **Income Assessment** microservices to **96M+ requests/month** and **137K+ borrower applications** across **8+ credit products** on Axis Bank's **Maximus** platform.",
      "Engineered reactive, non-blocking distributed services using **Kotlin**, **Spring WebFlux**, **MongoDB**, **Redis**, and **Kafka** orchestrated with an internal **SAGA Step Framework**.",
      "Architected **dynamic runtime version resolution**, decoupling release and hotfix cycles across **8+ lending products** (Home, Business, Auto, Personal Loans, Credit Cards) with zero cross-product regression.",
      "Authored a reusable **Spring WebFilter** for **AES request/response encryption**, enforcing mandatory **RBI security compliance** across **8+ microservices**.",
      "Resolved production incidents for critical financial integrations (**Perfios Anumati AA**) and authored technical architecture schemas for **GitHub Copilot MCP servers** and enterprise **RAG pipelines**.",
    ],
  },
  {
    role: "Senior Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Jan 2024 – Jul 2025",
    bullets: [
      "Led the decomposition of a legacy billing monolith (**mBAS**) into **TMF-compliant Spring Boot microservices** for **Vodafone India**.",
      "Built automated subscription reporting microservices and scheduled aggregation pipelines using **Docker** and **Cron**.",
      "Mentored junior engineers (**ComCubs**) on **clean code architecture**, **SOLID design principles**, and microservices best practices.",
    ],
  },
  {
    role: "Product Development Intern → Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Feb 2022 – Dec 2023",
    bullets: [
      "Reduced API response latency by **30%–50%** across core billing endpoints through **payload compression** and **database pagination**.",
      "Developed management dashboards using **React.js** integrated with **Spring Security**, **JWT**, and **LDAP** role-based access control.",
      "Automated integration test suites with **JUnit** and **Mockito**, driving test coverage and static analysis standards via **SonarQube**.",
    ],
  },
];
