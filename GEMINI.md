# Antigravity Project Configuration: Backend Developer Portfolio

## 1. Project Overview & Persona
- **Developer Identity**: Senior / Backend-heavy Software Engineer with 4+ years of production experience.
- **Specialization**: High-throughput distributed systems, event-driven architectures, database internals & query optimization, resilient APIs, and concurrency control.
- **UX Reference Model**: Inspired by [`cneuralnets.xyz`](https://cneuralnets.xyz/) — Split two-column layout with fixed desktop sidebar navigation, spacious single-column reading stage, clean editorial typography, and high information density without visual clutter.
- **Aesthetic Direction**: **"Indic-Architectural Minimal"** — Deeply grounded in Indian architectural heritage (Rajasthan Havelis, Stepwells / Baolis, Stone Screen Jali Fretwork, and Cusped Arches):
  - **Arches & Alcoves**: Cusped multi-foil Jharokha arch silhouette framing the profile mark; Jharokha stone alcove styling for key summaries and callouts (`.jharokha-alcove`).
  - **Subtle Jaali Fretwork**: Geometric 8-pointed star & diamond jaali screen pattern (`JaaliBackgroundPattern`) at low opacity (`3.5%`) on background & sidebar; fine stone lintel frieze dividers (`JaaliFriezeDivider`) between major sections.
  - **Stepped Baoli Geometry**: Stepped Chand Baori inverted diamond markers (`SteppedBaoliDot`) on timeline items; stepped stone bracket corners (`HaveliCornerBracket`) on project cards.
  - **Palette**:
    - **Dark Mode (Default)**: Deep Kohl / Mineral Umber Charcoal (`#0f1011`), Haveli Courtyard Stone (`#161819`), Ivory Silk ink (`#ecefe9`), warm terracotta rust accent (`#df683c`), and warm saffron/haldi gold (`#d48832`).
    - **Light Mode**: Kora Linen & Dholpur Light Sandstone (`#f7f4ec`), Chhatri Marble White (`#fefcf7`), aged inscription carbon ink (`#1a1c1a`), and Red Fort Terracotta clay (`#b44422`).
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
│   │   ├── Sidebar.tsx          # Fixed desktop sidebar with Jharokha arch avatar & active tracking
│   │   ├── IndicMotif.tsx       # Architectural SVG elements (Jaali screens, Jharokha arch, Baoli dots)
│   │   └── ContactEmail.tsx     # One-click email copy & compose button
│   ├── data/
│   │   ├── profile.ts           # Bio, social links, resume link
│   │   ├── experience.ts        # Work history & accomplishments
│   │   └── tech-stack.ts        # Categorized backend skills
│   └── lib/
│       └── markdown.ts          # Content reader & Gray-Matter frontmatter parser
```

---

## 3. UI/UX Rules from `cneuralnets.xyz` + Indic Architecture
- Maintain the two-column structure: Fixed desktop sidebar (`~256px`) on the left, spacious main reading stage (`max-width: 620px`) on the right.
- Timeline items use `.nn-tl-item` with architectural stepped Baoli diamond markers (`SteppedBaoliDot`).
- Section transitions use delicate stone frieze dividers (`JaaliFriezeDivider`) without visual loudness.
- Project, Note, and Blog listings use `.nn-links` and `.nn-link` with subtle title color transitions and animated directional arrows `→`.
- Navigation tracks on-screen sections via `IntersectionObserver` to highlight the active section indicator.
- Never add noisy SaaS gradient buttons or intrusive popups. Preserve the quiet craftsmanship of Indian architectural geometry and editorial typography.
