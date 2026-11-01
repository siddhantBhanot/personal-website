export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  yearsOfExperience: string;
  location: string;
  phone: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
    location: string;
  };
  bio: string[];
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  links: {
    resume: string;
    leetcode: string;
    linkedin: string;
    github: string;
    email: string;
    website: string;
  };
  focusAreas: string[];
}

export const profile: ProfileData = {
  name: "Siddhant Bhanot",
  title: "Backend Software Development Engineer",
  tagline: "Engineering reactive distributed systems, SAGA-based transaction pipelines, and resilient fintech platforms.",
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
  bio: [
    "i am a backend software development engineer with 4+ years of production experience building high-scale distributed systems and resilient microservices.",
    "currently at freecharge (axis bank), engineering backend services for the maximus digital acquisition and credit platform—powering high-throughput income assessment processing over 96m+ requests/month across 8+ lending products.",
    "previously at comviva, led the architectural migration of telecom mobile billing and subscription management (mbas) platforms from legacy monoliths to tmf-compliant spring boot microservices for vodafone india.",
    "specialized in kotlin, java, spring webflux, reactive programming, distributed saga patterns, apache kafka, redis, mongodb, and secure api architectures compliant with rbi guidelines.",
  ],
  metrics: [
    {
      label: "Monthly Scale",
      value: "96M+",
      detail: "Requests/month on shared Income Assessment service",
    },
    {
      label: "Applications Served",
      value: "137K+",
      detail: "Customer applications supported across 8+ lending products",
    },
    {
      label: "Experience",
      value: "4+ Years",
      detail: "High-scale fintech & telecom backend engineering",
    },
    {
      label: "Academic Excellence",
      value: "8.89",
      detail: "CGPA at Manipal University Jaipur (B.Tech IT)",
    },
  ],
  links: {
    resume: "/resume.pdf",
    leetcode: "https://leetcode.com/siddhantBhanot/",
    linkedin: "https://www.linkedin.com/in/siddhantbhanot/",
    github: "https://github.com/siddhantBhanot",
    email: "siddhantbhanot@gmail.com",
    website: "https://siddhantbhanot.github.io/",
  },
  focusAreas: [
    "reactive microservices",
    "spring webflux & kotlin",
    "distributed saga pattern",
    "apache kafka streaming",
    "mongodb & redis caching",
    "96m+ req/month scale",
    "rbi security compliance (aes)",
    "monolith to microservices",
  ],
};
