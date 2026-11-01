import Link from "next/link";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { techStackData } from "@/data/tech-stack";
import { getItemsFromDirectory, NoteMeta, ProjectMeta, BlogMeta } from "@/lib/markdown";
import { ContactEmail } from "@/components/ContactEmail";
import {
  SteppedBaoliDot,
  JaaliFriezeDivider,
  HaveliCornerBracket,
  SectionArchBadge,
} from "@/components/IndicMotif";

export default function HomePage() {
  const notes = getItemsFromDirectory<NoteMeta>("notes");
  const projects = getItemsFromDirectory<ProjectMeta>("projects");
  const blogs = getItemsFromDirectory<BlogMeta>("blogs");

  return (
    <div className="nn-main-inner">
      {/* 1. About Section */}
      <section id="about" className="flex flex-col gap-6 relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <SectionArchBadge label="architectural engineering" />
            <h1 className="text-[38px] sm:text-[44px] leading-[46px] sm:leading-[50px] font-light text-[var(--ink)] tracking-tight mt-1">
              about me
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              className="nn-pill"
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>resume (pdf)</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="nn-pill"
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>leetcode (600+ solved)</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Jharokha Alcove Style for Introduction */}
        <div className="jharokha-alcove">
          <HaveliCornerBracket position="top-right" />
          <div className="nn-prose">
            <p>
              i am a backend software engineer with 4+ years of production experience based in india.
            </p>
            <p>
              i specialize in high-concurrency distributed systems, event-driven pipelines, database internals and indexing optimizations, and resilient api infrastructure.
            </p>
            <p>
              currently designing distributed transaction processing and ingestion platforms handling 150k+ events/sec with go, postgresql, kafka, and redis.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {[
            "distributed systems",
            "high throughput (150k+ rps)",
            "database internals",
            "concurrency control",
            "apache kafka",
            "golang",
            "postgresql",
            "redis internals",
          ].map((tag) => (
            <span key={tag} className="nn-tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <JaaliFriezeDivider />

      {/* 2. Experience Section */}
      <section id="experience" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> experience
          </h2>
          <span className="nn-section-aside">4+ years · since 2021</span>
        </div>

        <ol className="nn-timeline">
          {experiences.map((exp, idx) => (
            <li
              key={idx}
              className="nn-tl-item"
              data-current={idx === 0 ? "true" : "false"}
            >
              {/* Architectural Stepped Baoli Marker */}
              <SteppedBaoliDot isCurrent={idx === 0} />

              <div className="nn-tl-header">
                <span className="nn-tl-role">{exp.role.toLowerCase()}</span>
                <span className="nn-tl-when">{exp.period.toLowerCase()}</span>
              </div>
              <span className="nn-tl-org">
                {exp.company.toLowerCase()} • {exp.location.toLowerCase()}
              </span>
              <p className="nn-tl-desc">{exp.description}</p>
              <ul className="nn-tl-bullets">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <JaaliFriezeDivider />

      {/* 3. Projects Section */}
      <section id="projects" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> projects
          </h2>
          <span className="nn-section-aside">{projects.length} systems</span>
        </div>

        <ul className="nn-links">
          {projects.map((proj) => (
            <li key={proj.slug}>
              <Link className="nn-link group" href={`/projects#${proj.slug}`}>
                <span className="nn-link-title flex items-center gap-2">
                  <span className="text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 transition-opacity">❖</span>
                  {proj.data.title.toLowerCase()}
                </span>
                <span className="nn-arrow" aria-hidden="true">→</span>
                <span className="nn-link-desc">{proj.data.summary}</span>
                {proj.data.metrics && (
                  <span className="nn-link-meta">
                    scale: {proj.data.metrics}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <JaaliFriezeDivider />

      {/* 4. Engineering Notes Section */}
      <section id="notes" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> engineering notes
          </h2>
          <span className="nn-section-aside">{notes.length} deep dives</span>
        </div>

        <ul className="nn-links">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link className="nn-link group" href={`/notes/${note.slug}`}>
                <span className="nn-link-title flex items-center gap-2">
                  <span className="text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 transition-opacity">❖</span>
                  {note.data.title.toLowerCase()}
                </span>
                <span className="nn-arrow" aria-hidden="true">→</span>
                <span className="nn-link-desc">{note.data.summary}</span>
                <span className="nn-link-meta">
                  {note.data.readingTime} • {note.data.tags?.join(", ").toLowerCase()}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <JaaliFriezeDivider />

      {/* 5. Blogs Section */}
      <section id="blogs" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> blogs & essays
          </h2>
          <span className="nn-section-aside">reflections</span>
        </div>

        <ul className="nn-links">
          {blogs.map((blog) => (
            <li key={blog.slug}>
              <Link className="nn-link group" href={`/blogs/${blog.slug}`}>
                <span className="nn-link-title flex items-center gap-2">
                  <span className="text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 transition-opacity">❖</span>
                  {blog.data.title.toLowerCase()}
                </span>
                <span className="nn-arrow" aria-hidden="true">→</span>
                <span className="nn-link-desc">{blog.data.summary}</span>
                <span className="nn-link-meta">
                  {blog.data.date} • {blog.data.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <JaaliFriezeDivider />

      {/* 6. Tech Stack Section */}
      <section id="stack" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> tech stack
          </h2>
          <span className="nn-section-aside">production arsenal</span>
        </div>

        <div className="flex flex-col gap-6">
          {techStackData.map((category) => (
            <div key={category.category} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[var(--accent)] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rotate-45 border border-[var(--accent-gold)] bg-[var(--surface-sunk)]" />
                {category.category.toLowerCase()}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="nn-tag"
                    title={skill.note ? `${skill.name} (${skill.note})` : skill.name}
                  >
                    {skill.name.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JaaliFriezeDivider />

      {/* 7. Contact Section */}
      <section id="contact" className="flex flex-col gap-6 relative">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> contact
          </h2>
        </div>

        <div className="nn-prose">
          <p>
            feel free to reach out for backend architecture discussions, distributed systems design, or senior engineering roles.
          </p>
        </div>

        <ContactEmail />

        <div className="flex flex-wrap gap-2 pt-2">
          <a
            className="nn-pill"
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>linkedin</span>
            <span className="nn-arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="nn-pill"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>github</span>
            <span className="nn-arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="nn-pill"
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>leetcode</span>
            <span className="nn-arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="nn-pill"
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>resume</span>
            <span className="nn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
