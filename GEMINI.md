# Antigravity Project Configuration: Backend Developer Portfolio

## 1. Project Overview & Persona
- **Developer Identity**: Senior / Backend-heavy Software Engineer with 4+ years of production experience.
- **Specialization**: High-throughput distributed systems, event-driven architectures, database internals & query optimization, resilient APIs, and concurrency control.
- **UX Reference Model**: Inspired by [`cneuralnets.xyz`](https://cneuralnets.xyz/) — Split two-column layout with fixed desktop sidebar navigation, spacious single-column reading stage, clean editorial typography, and high information density without visual clutter.
- **Aesthetic Direction**: **"Indic-Minimal"** — Sophisticated, grounded, clean, and quiet craftsmanship.
  - **Dark Mode (Default)**: Deep Kohl / Mineral Umber Charcoal (`#111213`), Ivory Silk ink (`#ecefe9`), warm terracotta rust accent (`#e0683b`), and warm saffron/haldi gold (`#d97d26`).
  - **Light Mode**: Warm handmade paper / kora linen (`#f6f4ee`), deep carbon ink (`#1b1d1c`), and earthy terracotta clay (`#b84724`).
  - **Typography**: Editorial Serif (`Spectral`) for headings (font-weight 300), Grotesk (`Hanken Grotesk`) for body, and Mono (`IBM Plex Mono`) for metadata, metrics, and dates.

---

## 2. Directory Architecture & File Responsibilities

```
personal-website/
├── GEMINI.md                    # Antigravity conventions & agent guidelines
├── content/                     # Markdown storage for developer writing
│   ├── notes/                   # Deep-dive engineering notes (DB internals, concurrency, locking)
│   ├── blogs/                   # Thought leadership, essays, retrospectives
│   └── projects/                # Technical case studies & architecture deep-dives
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Main canvas (about, experience, projects, notes, blogs, stack, contact)
│   │   ├── notes/[slug]/page.tsx# Single note reader with clean serif/mono typography
│   │   ├── blogs/[slug]/page.tsx# Single blog post reader
│   │   ├── projects/page.tsx    # Dedicated systems & architecture index
│   │   ├── layout.tsx           # Shell holding Sidebar + Main reading stage
│   │   └── globals.css          # Design tokens, fonts, timeline, pill, and link styles
│   ├── components/
│   │   ├── Sidebar.tsx          # Fixed desktop sidebar with active section tracking, theme toggle, and links
│   │   └── ContactEmail.tsx     # One-click email copy & compose button
│   ├── data/
│   │   ├── profile.ts           # Bio, social links, resume link
│   │   ├── experience.ts        # Work history & accomplishments
│   │   └── tech-stack.ts        # Categorized backend skills
│   └── lib/
│       └── markdown.ts          # Content reader & Gray-Matter frontmatter parser
```

---

## 3. UI/UX Rules from `cneuralnets.xyz`
- Maintain the two-column structure: Fixed desktop sidebar (`~254px`) on the left, spacious main reading stage (`max-width: 620px`) on the right.
- Timeline items have left-border indicators with dot markers (`.nn-tl-item`, `.nn-tl-dot`).
- Project, Note, and Blog listings use `.nn-links` and `.nn-link` with subtle title color transitions and animated directional arrows `→`.
- Navigation tracks on-screen sections via `IntersectionObserver` to highlight the active section indicator.
- Never add flashy SaaS gradient buttons, unnecessary popups, or noisy floating elements. Preserve the quiet, intellectual clarity of the design.
