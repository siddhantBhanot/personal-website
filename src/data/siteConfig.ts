/**
 * Centralized SEO & Site Configuration for Siddhant Bhanot Portfolio
 */
export const siteConfig = {
  name: "Siddhant Bhanot",
  title: "Siddhant Bhanot | Backend-Heavy Software Engineer (Spring, Kotlin, AI/RAG)",
  titleTemplate: "%s | Siddhant Bhanot",
  description:
    "Portfolio of Siddhant Bhanot, a backend-heavy software engineer building reactive microservices (Spring, Kotlin) and RAG/MCP-based AI tooling. Works on an Income Assessment service handling 96M+ requests/month at Freecharge (Axis Bank).",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://siddhantbhanot.vercel.app"),
  ogImage: "/og-image.png",
  locale: "en_US",
  author: {
    name: "Siddhant Bhanot",
    role: "Backend-Heavy Software Engineer",
    company: "Freecharge (Axis Bank)",
    previousCompany: "Comviva",
    location: "Gurugram, India",
    email: "siddhantbhanot@gmail.com",
    phone: "+91 7838332124",
    github: "https://github.com/siddhantBhanot",
    linkedin: "https://www.linkedin.com/in/siddhantbhanot/",
    leetcode: "https://leetcode.com/siddhantBhanot/",
    website: "https://siddhantbhanot.github.io/",
  },
  keywords: [
    "Siddhant Bhanot",
    "Siddhant Bhanot Software Engineer",
    "Siddhant Bhanot Portfolio",
    "Siddhant Bhanot Backend",
    "Siddhant Bhanot Freecharge",
    "Siddhant Bhanot Axis Bank",
    "Siddhant Bhanot Comviva",
    "Backend-Heavy Software Engineer",
    "Backend Engineering",
    "Distributed Systems",
    "Reactive Microservices",
    "Kotlin",
    "Spring WebFlux",
    "Spring Boot",
    "SAGA Pattern",
    "Apache Kafka",
    "MongoDB",
    "Redis",
    "AI Engineering",
    "RAG Pipelines",
    "System Design",
    "Low Level Design",
    "High Level Design",
    "High-Throughput APIs",
    "Software Engineer Portfolio",
  ],
};

