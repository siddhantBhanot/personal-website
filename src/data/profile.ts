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
    summary: [
      "Software Engineer with a strong foundation in backend engineering and distributed systems, complemented by experience in frontend development and AI-powered applications.",
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
