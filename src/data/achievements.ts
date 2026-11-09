export interface AchievementAttachment {
  name: string;
  url: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  organization: string;
  description: string[];
  metrics?: string;
  tags: string[];
  attachments?: AchievementAttachment[];
}

export const achievementsData: Achievement[] = [
  {
    id: "hackathon-comhub",
    title: "Ranked Among Top 5 Submissions in Company-Wide Hackathon",
    category: "Hackathon / AI Systems",
    organization: "Comviva",
    description: [
      "Developed ComHub, an AI-powered knowledge-sharing platform for technical and non-technical Q&A.",
      "Leveraged Azure AI Search to create and train vector indexes across Comviva's enterprise codebase and historical Q&A data, enabling semantic search and highly accurate answer retrieval.",
      "Incorporated an engagement and gamification mechanism offering points, badges, and monetary incentives to drive developer contributions and knowledge retention.",
    ],
    metrics: "Top 5 Company-Wide",
    tags: ["Azure AI Search", "Vector Indexing", "RAG", "Knowledge Base"],
    attachments: [
      { name: "Award Certificate", url: "/images/achievements/hackathon/hack1.jpeg" },
      { name: "System Architecture", url: "/images/achievements/hackathon/about.png" },
      { name: "Search Interface", url: "/images/achievements/hackathon/search-page.png" },
      { name: "User Profile", url: "/images/achievements/hackathon/profile.png" },
      { name: "Azure Dashboard", url: "/images/achievements/hackathon/azure-dashboard.png" },
    ],
  },
  {
    id: "ace-cards",
    title: "ACE (Appreciation for Commitment & Effort) Cards",
    category: "Professional Recognition",
    organization: "Comviva",
    description: [
      "Awarded 6 ACE (Appreciation for Commitment & Effort) cards by engineering managers and team leads during my tenure at Comviva.",
      "Recognized for critical contributions to production stability, delivery excellence in microservices migration, and proactive cross-team technical collaboration.",
    ],
    metrics: "6 ACE Awards",
    tags: ["Leadership Recognition", "Production Excellence", "Engineering Impact"],
    attachments: [
      { name: "ACE Award #1", url: "/images/achievements/ace-cards/A1.jpeg" },
      { name: "ACE Award #2", url: "/images/achievements/ace-cards/A2.jpeg" },
      { name: "ACE Award #3", url: "/images/achievements/ace-cards/A3.jpeg" },
      { name: "ACE Award #4", url: "/images/achievements/ace-cards/A4.jpeg" },
      { name: "ACE Award #5", url: "/images/achievements/ace-cards/A5.jpeg" },
      { name: "ACE Award #6", url: "/images/achievements/ace-cards/A6.jpeg" },
    ],
  },
];

