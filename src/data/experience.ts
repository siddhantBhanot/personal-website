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
      "Work on the shared **Income Assessment** microservices, which handle **96M+ requests/month** and **137K+ borrower applications** across **8+ credit products** on Axis Bank's **Maximus** platform.",
      "Led the refactoring of the shared Income Assessment Service to support **dynamic runtime version resolution** per lending product (Home, Business, Auto, Personal Loans, Credit Cards), so a hotfix ships to one product without regression or sandbox testing for the others, shortening release cycles.",
      "Built a reusable **Spring WebFilter** for **AES request/response encryption** of exposed APIs to meet **RBI security guidelines**; adopted across **8+ lending microservices**.",
      "Resolved production incidents for critical financial integrations (**Perfios Anumati AA**).",
      "Authored Markdown context for the **SAGA-based Step Framework** and Income Assessment Service and onboarded it to the organization's **GitHub Copilot MCP server** (built by another team) for **AI-assisted development**; reusing it for an internal **RAG** pipeline.",
    ],
  },
  {
    role: "Senior Product Development Engineer",
    company: "Comviva",
    location: "Gurugram, India",
    period: "Jan 2024 – Jul 2025",
    bullets: [
      "Contributed to the decomposition of a legacy billing and subscription monolith (**mBAS**) into **9 domain services** (catalog, subscription, order, rating/charging, billing, provisioning, network integration, analytics, notification) with **TMF-compliant APIs** for **Vodafone India** (**180M+ subscribers** across domains).",
      "Built automated subscription reporting microservices and scheduled aggregation pipelines using **Docker** and **Cron**.",
      "Mentored junior engineers (**ComCubs**) on **clean code architecture**, **SOLID design principles**, and microservices best practices.",
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
