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
            <SectionArchBadge label="backend software engineer" />
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
              <span>leetcode</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Jharokha Alcove Style for Introduction */}
        <div className="jharokha-alcove">
          <HaveliCornerBracket position="top-right" />
          <div className="nn-prose">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Focus Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {profile.focusAreas.map((tag) => (
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
          <span className="nn-section-aside">4+ years · freecharge (axis bank) & comviva</span>
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

              <div className="flex flex-wrap gap-1.5 pt-3">
                {exp.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-[var(--ink-faint)] bg-[var(--surface-sunk)] px-2 py-0.5 rounded">
                    {t.toLowerCase()}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        {/* Education Highlight */}
        <div className="mt-4 p-4 rounded border border-[var(--line)] bg-[var(--surface)] flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider block">education</span>
            <span className="text-sm font-medium text-[var(--ink)]">{profile.education.degree}</span>
            <span className="text-xs text-[var(--ink-soft)] block font-mono mt-0.5">
              {profile.education.institution} • {profile.education.location}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-mono text-[var(--accent)] font-semibold">CGPA: {profile.education.cgpa}</span>
            <span className="text-xs text-[var(--ink-faint)] block font-mono">{profile.education.period}</span>
          </div>
        </div>
      </section>

      <JaaliFriezeDivider />

      {/* 3. Projects Section */}
      <section id="projects" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-serif font-light">॥</span> projects & architectures
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
                    impact: {proj.data.metrics}
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
          <span className="nn-section-aside">{profile.location.toLowerCase()}</span>
        </div>

        <div className="nn-prose">
          <p>
            feel free to reach out for backend architecture discussions, high-throughput distributed systems, or senior software engineering roles.
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
