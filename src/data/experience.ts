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
    company: "Freecharge",
    location: "Gurugram, India",
    period: "Sep 2025 – Present",
    bullets: [
      "Engineer reactive **Spring WebFlux** services (**Kotlin**, **MongoDB**, **Redis**, **Kafka**) for the **Maximus** platform powering **Axis Bank’s** digital customer acquisition and pre-approved credit offerings. The shared **Income Assessment Service** handles **96M+ requests/month** and **137K+ applications** across **8+ lending products**.",
      "Led the refactoring of the shared Income Assessment Service for **dynamic runtime version resolution** per lending product, so a hotfix ships to one product without regression or sandbox testing for the others.",
      "Built a reusable **Spring WebFilter** for **AES request/response encryption** of exposed APIs to meet **RBI security guidelines**; adopted across **8+ lending microservices**.",
      "Authored Markdown context for the **SAGA-based Step Framework** and **Income Assessment Service**, onboarded to the organization’s **GitHub Copilot MCP server** for AI-assisted development; reusing it for internal RAG.",
    ],
  },
  {
    role: "Senior Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Jan 2024 – Jul 2025",
    bullets: [
      "Contributed to decomposing a legacy monolithic billing and subscription platform into **9 domain services** with **TMF-compliant APIs** for **Vodafone India** (**180M+ subscribers** across domains).",
      "Built Vodafone-specific features and reporting REST APIs (**Spring Boot**, **Docker**); supported Phase 3 sandbox integration.",
      "Mentored new hires (**ComCubs**) through knowledge transfer, code reviews, and engineering best practices.",
    ],
  },
  {
    role: "Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Feb 2022 – Dec 2023",
    bullets: [
      "Developed a **React.JS** management console for the billing and subscription platform, with **Spring Security**, **JWT**, and **LDAP** authentication and authorization.",
      "Improved API response time by **30%–50%** through **payload compression** and **database pagination**.",
    ],
  },
];
