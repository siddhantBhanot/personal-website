export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  location: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  yearsOfExperience: string;
  location: string;
  phone: string;
  education: Education;
  about: {
    headline: string;
    summary: string[];
    corePillars: {
      title: string;
      description: string;
    }[];
  };
  highlights: string[];
  links: {
    resume: string;
    leetcode: string;
    linkedin: string;
    github: string;
    email: string;
    website: string;
  };
}

export const profile: ProfileData = {
  name: "Siddhant Bhanot",
  title: "Backend Software Development Engineer",
  tagline: "4+ years engineering scalable, reactive microservices, distributed transaction pipelines, and enterprise-grade platforms.",
  yearsOfExperience: "4+ Years",
  location: "Gurugram, India",
  phone: "+91 7838332124",
  education: {
    institution: "Manipal University Jaipur",
    degree: "B.Tech. in Information Technology",
    period: "2018 – 2022",
    cgpa: "8.89 / 10.0",
    location: "Jaipur, India",
  },
  about: {
    headline: "Backend Engineer • 4+ Years Experience • Enterprise Scale",
    summary: [
      "Backend Software Engineer with 4+ years of professional production experience architecting high-throughput, fault-tolerant distributed systems and reactive microservices.",
      "Currently at FreechargeBiz (Axis Bank), I engineer backend services for the Maximus digital acquisition platform. My work powers a shared Income Assessment service processing 96M+ requests/month and supporting 137K+ borrower applications across 8+ lending products (Home Loan, Business Loan, Auto Loan, Personal Loan, Credit Card).",
      "Previously at Comviva, I led the decomposition of legacy billing monoliths (mBAS for Vodafone India) into modern TMF-compliant Spring Boot microservices, cutting API latency by 30%–50%.",
    ],
    corePillars: [
      {
        title: "Distributed Systems & SAGA",
        description: "Orchestrating multi-step financial transaction pipelines with automated rollbacks and eventual consistency.",
      },
      {
        title: "High-Throughput Reactive APIs",
        description: "Leveraging Kotlin and Spring WebFlux event loops for non-blocking I/O handling tens of millions of monthly requests.",
      },
      {
        title: "Security & Regulatory Compliance",
        description: "Authoring enterprise-wide AES encryption WebFilters enforcing RBI guidelines across production lending microservices.",
      },
    ],
  },
  highlights: [
    "4+ Years Production Backend Experience",
    "96M+ Requests / Month Scale",
    "Axis Bank Digital Acquisition Platform",
    "SAGA Distributed Transaction Architecture",
    "Reactive Microservices (Kotlin + WebFlux)",
    "B.Tech. IT (Manipal University Jaipur, CGPA 8.89)",
  ],
  links: {
    resume: "/resume.pdf",
    leetcode: "https://leetcode.com/siddhantBhanot/",
    linkedin: "https://www.linkedin.com/in/siddhantbhanot/",
    github: "https://github.com/siddhantBhanot",
    email: "siddhantbhanot@gmail.com",
    website: "https://siddhantbhanot.github.io/",
  },
};
