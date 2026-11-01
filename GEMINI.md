# Antigravity Project Configuration: Backend Developer Portfolio

## 1. Project Overview & Persona
- **Developer Identity**: Senior / Backend-heavy Software Engineer with 4+ years of production experience.
- **Specialization**: High-throughput distributed systems, event-driven architectures, database internals & query optimization, resilient APIs, and concurrency control.
- **Aesthetic Direction**: **"Indic-Minimal"** — Sophisticated, grounded, clean, and professional.
  - Not quirky or playful; avoids flashy SaaS animations or generic bootstrap templates.
  - Grounded in warm, tasteful earth and mineral tones (deep kohl/charcoal, raw clay/terracotta, warm turmeric/saffron amber, and raw paper/kora linen).
  - Default: **Dark Mode**, with a full **Light Mode** toggle.
  - Engineering-first layout: Clean metrics, monospace data tables, architecture diagrams (Mermaid-ready), and crisp typography.

---

## 2. Directory Architecture & File Responsibilities

```
personal-website/
├── GEMINI.md                    # This file - Project conventions & Agent guidelines
├── content/                     # Markdown / MDX storage for developer writing
│   ├── notes/                   # Deep-dive engineering notes (System Design, DBs, Concurrency)
│   ├── blogs/                   # Thought leadership, essays, retrospectives
│   └── projects/                # Technical case studies & architecture deep-dives
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # Home: Hero, Experience highlights, Featured Projects, Notes
│   │   ├── experience/page.tsx  # Dedicated Career Timeline & Impact
│   │   ├── projects/page.tsx    # Technical Projects with metrics & architecture
│   │   ├── notes/page.tsx       # Engineering Notes directory
│   │   ├── notes/[slug]/page.tsx# Single note viewer
│   │   ├── blogs/page.tsx       # Blog post directory
│   │   ├── blogs/[slug]/page.tsx# Single blog post viewer
│   │   ├── contact/page.tsx     # Contact & communication channels
│   │   ├── layout.tsx           # Global shell (Header, Nav, Footer, ThemeProvider)
│   │   └── globals.css          # CSS Variables for Dark & Light Indic themes
│   ├── components/              # Modular UI components
│   │   ├── Navbar.tsx           # Top navigation with links & theme toggle
│   │   ├── Footer.tsx           # Footer with LeetCode, GitHub, LinkedIn, Resume
│   │   ├── ThemeToggle.tsx      # Dark / Light mode switch
│   │   ├── IndicMotif.tsx       # Subtle geometric decorative elements
│   │   ├── TechStackGrid.tsx    # Grouped backend tech stack
│   │   └── MetricCard.tsx       # Systems metrics cards (RPS, Latency, Scale)
│   ├── data/                    # Structured data
│   │   ├── profile.ts           # Bio, social links, resume link
│   │   ├── experience.ts        # Work history & accomplishments
│   │   └── tech-stack.ts        # Categorized backend skills
│   └── lib/
│       └── markdown.ts          # Content reader & Gray-Matter frontmatter parser
```

---

## 3. Theme & Styling Guidelines

### Color Palette (Tailwind CSS Variables)
- **Dark Mode (Default)**:
  - Background: `#0f0f11` (Deep Kohl / Mineral Charcoal)
  - Card / Surface: `#17171a` (Warm Slate Slate)
  - Border: `#28282e` (Subtle boundary)
  - Primary Text: `#f4f3ef` (Ivory Silk)
  - Secondary Text: `#9ca3af` (Muted Zinc)
  - Accent / Highlights: `#e06b3a` (Warm Terracotta / Sindoor Orange) and `#d97706` (Amber / Haldi)
- **Light Mode**:
  - Background: `#fbf9f5` (Kora / Handmade Cotton Paper)
  - Card / Surface: `#ffffff` (Pure Crisp White)
  - Border: `#e7e3da` (Warm Sandstone)
  - Primary Text: `#1a1a1e` (Deep Carbon)
  - Secondary Text: `#57534e` (Warm Stone)
  - Accent: `#c2410c` (Earthy Rust / Terracotta)

---

## 4. Content Frontmatter Standards

### Engineering Notes (`content/notes/*.md`):
```yaml
---
title: "Distributed Locking Strategies with Redis & Etcd"
summary: "Comparative analysis of Redlock vs Etcd consensus under network partitions."
date: "2026-10-12"
tags: ["Distributed Systems", "Redis", "Consensus"]
readingTime: "6 min read"
difficulty: "Advanced"
---
```

### Blog Posts (`content/blogs/*.md`):
```yaml
---
title: "Lessons Learned from 4 Years in High-Throughput Backend Systems"
summary: "Reflections on microservices, database bottlenecks, and engineering rigor."
date: "2026-09-20"
tags: ["Career", "Architecture", "Backend"]
readingTime: "8 min read"
---
```

### Projects (`content/projects/*.md`):
```yaml
---
title: "High-Throughput Distributed Rate Limiter"
summary: "Token bucket & sliding window counter rate limiter handling 150k+ RPS with Redis clusters."
period: "2025 - 2026"
role: "Lead Backend Architect"
metrics: "150k+ RPS, p99 < 1.8ms"
stack: ["Go", "Redis", "gRPC", "Docker", "Prometheus"]
github: "https://github.com/..."
live: ""
featured: true
---
```

---

## 5. Coding & Antigravity Rules
- Maintain TypeScript strictness across all components and libraries.
- Keep components modular and server-first where possible (`'use client'` only for interactive theme toggles, filters, and mobile drawer).
- Always ensure all external links (Resume, LeetCode, LinkedIn, GitHub) have `rel="noopener noreferrer"` and appropriate accessibility labels.
