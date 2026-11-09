import Link from "next/link";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { techStackData } from "@/data/tech-stack";
import { achievementsData } from "@/data/achievements";
import { getItemsFromDirectory, ProjectMeta } from "@/lib/markdown";
import { ContactEmail } from "@/components/ContactEmail";
import { FormattedText } from "@/components/FormattedText";
import {
  SteppedBaoliDot,
  JaaliFriezeDivider,
  HaveliCornerBracket,
  SectionArchBadge,
} from "@/components/IndicMotif";
import { GithubIcon, ExternalLinkIcon, LeetCodeIcon, LinkedinIcon } from "@/components/Icons";

export default function HomePage() {
  const projects = getItemsFromDirectory<ProjectMeta>("projects");

  return (
    <div className="nn-main-inner">
      {/* 1. About Section */}
      <section id="about" className="flex flex-col gap-6 relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <SectionArchBadge label="Backend Software Engineer" />
            <h1 className="text-[30px] sm:text-[36px] leading-[38px] sm:leading-[42px] font-medium text-[var(--ink)] tracking-tight mt-1 font-mono">
              Siddhant Bhanot
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              className="nn-pill"
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume (PDF)</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="nn-pill"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
            </a>
            <a
              className="nn-pill"
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LeetCode</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Jharokha Alcove Style for Concise Summary */}
        <div className="jharokha-alcove">
          <HaveliCornerBracket position="top-right" />
          <div className="nn-prose">
            {profile.about.summary.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Recruiter Quick Highlights */}
        {profile.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {profile.highlights.map((highlight) => (
              <span key={highlight} className="nn-tag text-xs font-mono">
                {highlight}
              </span>
            ))}
          </div>
        )}
      </section>

      <JaaliFriezeDivider />

      {/* 2. Experience Section */}
      <section id="experience" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-mono font-normal">॥</span> Experience
          </h2>
          <span className="nn-section-aside">4+ Years · Freecharge (Axis Bank) & Comviva</span>
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
                <span className="nn-tl-role">{exp.role}</span>
                <span className="nn-tl-when">{exp.period}</span>
              </div>
              <span className="nn-tl-org">
                {exp.company} • {exp.location}
              </span>

              <ul className="nn-tl-bullets mt-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <FormattedText text={bullet} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Education Card */}
        <div className="mt-2 p-5 rounded border border-[var(--line)] bg-[var(--surface)] flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider block">Education</span>
            <span className="text-base font-medium text-[var(--ink)]">{profile.education.degree}</span>
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

      {/* 3. Tech Stack Section */}
      <section id="stack" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-mono font-normal">॥</span> Tech Stack
          </h2>
          <span className="nn-section-aside">Languages • Frameworks • Distributed Systems</span>
        </div>

        <div className="flex flex-col gap-6">
          {techStackData.map((category) => (
            <div key={category.category} className="flex flex-col gap-2.5">
              <div className="flex items-baseline justify-between gap-2 border-b border-[var(--line)] pb-1">
                <span className="font-mono text-xs text-[var(--accent)] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 border border-[var(--accent-gold)] bg-[var(--surface-sunk)]" />
                  {category.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="nn-tech-pill"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JaaliFriezeDivider />

      {/* 4. Projects Section */}
      <section id="projects" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-mono font-normal">॥</span> Projects
          </h2>
          <span className="nn-section-aside">{projects.length} Featured Systems</span>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((proj) => (
            <div
              key={proj.slug}
              className="relative p-5 rounded border border-[var(--line)] bg-[var(--surface)] flex flex-col gap-3 group"
            >
              <HaveliCornerBracket position="top-right" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base font-mono font-medium text-[var(--ink)] flex items-center gap-2">
                    <span className="text-xs text-[var(--accent-gold)]">❖</span>
                    <Link
                      href={`/projects#${proj.slug}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {proj.data.title}
                    </Link>
                  </h3>
                  <span className="font-mono text-xs text-[var(--accent)] mt-0.5 block">
                    {proj.data.period}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {proj.data.github && (
                    <a
                      href={proj.data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nn-pill text-xs py-1 px-2.5 flex items-center gap-1"
                      aria-label={`GitHub repo for ${proj.data.title}`}
                    >
                      <GithubIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Code</span>
                    </a>
                  )}
                  {proj.data.live && (
                    <a
                      href={proj.data.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nn-pill text-xs py-1 px-2.5 flex items-center gap-1"
                      aria-label={`Live demo for ${proj.data.title}`}
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {proj.data.image && (
                <Link
                  href={`/projects#${proj.slug}`}
                  className="relative w-full overflow-hidden rounded border border-[var(--line)] bg-[var(--surface-sunk)] aspect-[16/9] my-1 group/img block"
                >
                  <img
                    src={proj.data.image}
                    alt={`${proj.data.title} preview`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/img:scale-[1.02]"
                    loading="lazy"
                  />
                </Link>
              )}

              <p className="text-xs leading-relaxed text-[var(--ink-soft)] font-mono">
                {proj.data.summary}
              </p>

              {proj.data.metrics && (
                <div className="font-mono text-xs text-[var(--accent)] bg-[var(--surface-sunk)] px-2.5 py-1.5 rounded border border-[var(--line)]">
                  <span className="text-[var(--accent-gold)] font-medium">Scale / Metric:</span> {proj.data.metrics}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.data.stack?.map((tech) => (
                  <span key={tech} className="nn-tag text-[11px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-[var(--line)] flex justify-between items-center text-xs font-mono">
                <span className="text-[var(--ink-faint)]">6-Part Architecture Breakdown</span>
                <Link
                  href={`/projects#${proj.slug}`}
                  className="text-[var(--accent)] hover:underline flex items-center gap-1"
                >
                  <span>Read Architecture</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <JaaliFriezeDivider />

      {/* 5. Achievements Section */}
      <section id="achievements" className="flex flex-col gap-6">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-mono font-normal">॥</span> Achievements & Awards
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded border border-[var(--line)] bg-[var(--surface)] flex flex-col gap-2 relative"
            >
              <HaveliCornerBracket position="top-right" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm sm:text-base font-mono font-medium text-[var(--ink)] flex items-center gap-2">
                  <span className="text-xs text-[var(--accent-gold)]">❖</span>
                  {item.title}
                </h3>
                {item.metrics && (
                  <span className="font-mono text-xs text-[var(--accent)] bg-[var(--surface-sunk)] px-2.5 py-1 rounded border border-[var(--line)]">
                    {item.metrics}
                  </span>
                )}
              </div>

              <span className="text-xs font-mono text-[var(--ink-faint)]">
                {item.organization} • {item.category}
              </span>

              <ul className="nn-tl-bullets mt-1 text-xs">
                {item.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-xs text-[var(--ink-soft)] leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>

              {item.attachments && item.attachments.length > 0 && (
                <div className="mt-2 pt-3 border-t border-[var(--line)] flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--ink-faint)]">
                    <span className="flex items-center gap-1.5 text-[var(--accent)] font-medium">
                    </span>
                    <span className="text-[10px] hidden sm:inline">Click to open full document ↗</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {item.attachments.map((att, aIdx) => (
                      <a
                        key={aIdx}
                        href={att.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/att flex flex-col items-center gap-1.5 p-1 rounded border border-[var(--line)] bg-[var(--surface-sunk)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
                        title={`View ${att.name}`}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded bg-[var(--surface)] flex items-center justify-center border border-[var(--line)] group-hover/att:border-[var(--accent)]/50">
                          <img
                            src={att.url}
                            alt={att.name}
                            className="w-full h-full object-cover object-center transition-transform duration-200 group-hover/att:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-[10px] font-mono text-[var(--ink-faint)] group-hover/att:text-[var(--ink)] max-w-[68px] sm:max-w-[80px] text-center truncate">
                          {att.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-[var(--ink-faint)] bg-[var(--surface-sunk)] px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JaaliFriezeDivider />

      {/* 8. Contact Section (Notes & Blogs hidden per user request) */}
      <section id="contact" className="flex flex-col gap-6 relative">
        <div className="nn-section">
          <h2>
            <span className="text-[var(--accent)] font-mono font-normal">॥</span> Contact
          </h2>
          <span className="nn-section-aside">{profile.location}</span>
        </div>

        <div className="nn-prose">
          <p>
            I am always open to exploring high-impact backend engineering opportunities, distributed systems architecture challenges, and collaborative technical projects. Feel free to connect directly via email or phone.
          </p>
        </div>

        {/* Contact Information & Action Card */}
        <div className="p-5 rounded border border-[var(--line)] bg-[var(--surface)] flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider block">Email</span>
              <a
                href={`mailto:${profile.links.email}`}
                className="text-sm font-mono text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-0.5 block"
              >
                {profile.links.email}
              </a>
            </div>
            <div>
              <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider block">Phone</span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="text-sm font-mono text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-0.5 block"
              >
                {profile.phone}
              </a>
            </div>
            <div>
              <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider block">Location</span>
              <span className="text-sm font-mono text-[var(--ink-soft)] mt-0.5 block">
                {profile.location}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-wider block">Profiles</span>
              <div className="flex items-center gap-3 mt-1">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <ContactEmail />
      </section>
    </div>
  );
}
