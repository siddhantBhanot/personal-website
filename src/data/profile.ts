export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  yearsOfExperience: string;
  location: string;
  bio: string;
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
  };
}

export const profile: ProfileData = {
  name: "Siddhant Bhanot",
  title: "Senior Backend Engineer",
  tagline: "Building resilient, high-throughput distributed architectures & data-intensive services.",
  yearsOfExperience: "4+ Years",
  location: "India",
  bio: "Pragmatic backend engineer with 4+ years of hands-on experience designing distributed microservices, low-latency APIs, and database-intensive systems. Deeply interested in concurrency models, storage engine internals, and fault tolerance at scale.",
  metrics: [
    {
      label: "Experience",
      value: "4+ Years",
      detail: "Production backend engineering",
    },
    {
      label: "Peak Throughput",
      value: "150k+ RPS",
      detail: "Handled across microservice clusters",
    },
    {
      label: "System Availability",
      value: "99.99%",
      detail: "SLA maintained on critical services",
    },
    {
      label: "LeetCode Solved",
      value: "600+",
      detail: "Algorithms, graphs & system internals",
    },
  ],
  links: {
    resume: "/resume.pdf",
    leetcode: "https://leetcode.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
    email: "siddhant.bhanot@example.com",
  },
};
