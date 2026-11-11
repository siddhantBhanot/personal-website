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
    summary: string[];
    corePillars?: {
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
  title: "Backend-Heavy Software Engineer",
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
    summary: [
      "Backend-heavy software engineer (4+ years) with a strong foundation in distributed systems and reactive microservices, and hands-on experience in RAG, MCP, and AI-assisted development.",
    ],
  },
  highlights: [],
  links: {
    resume: "/resume.pdf",
    leetcode: "https://leetcode.com/siddhantBhanot/",
    linkedin: "https://www.linkedin.com/in/siddhantbhanot/",
    github: "https://github.com/siddhantBhanot",
    email: "siddhantbhanot@gmail.com",
    website: "https://siddhantbhanot.github.io/",
  },
};
