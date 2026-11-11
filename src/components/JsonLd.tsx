import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: "Siddhant Bhanot",
    givenName: "Siddhant",
    familyName: "Bhanot",
    additionalName: "Siddhant",
    gender: "Male",
    jobTitle: "Backend Software Development Engineer",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    email: `mailto:${siteConfig.author.email}`,
    telephone: siteConfig.author.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Manipal University Jaipur",
      url: "https://jaipur.manipal.edu",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freecharge (Axis Bank)",
      url: "https://www.freecharge.in",
    },
    sameAs: [
      siteConfig.author.linkedin,
      siteConfig.author.github,
      siteConfig.author.leetcode,
      siteConfig.author.website,
    ],
    knowsAbout: [
      "Backend Software Engineering",
      "Distributed Systems",
      "Reactive Microservices",
      "SAGA Pattern",
      "Kotlin",
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "Apache Kafka",
      "Redis",
      "MongoDB",
      "Low Level Design (LLD)",
      "High Level Design (HLD)",
      "System Design",
      "AI Engineering",
      "RAG Pipelines",
      "Rest APIs",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: "Siddhant Bhanot - Software Engineer Portfolio",
    alternateName: [
      "Siddhant Bhanot",
      "Siddhant Bhanot Portfolio",
      "Siddhant Bhanot Official Website",
    ],
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.siteUrl}/#profilepage`,
    url: siteConfig.siteUrl,
    name: "Siddhant Bhanot Portfolio & Engineering Case Studies",
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
    mainEntity: {
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    primaryImageOfPage: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    dateCreated: "2024-01-01",
    dateModified: "2026-11-09",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}

