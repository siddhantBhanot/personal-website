export interface Achievement {
  id: string;
  title: string;
  category: string;
  organization: string;
  description: string[];
  metrics?: string;
  tags: string[];
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
  },
];
