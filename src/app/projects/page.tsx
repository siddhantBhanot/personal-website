import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getItemsFromDirectory, ProjectMeta } from "@/lib/markdown";
import { HaveliCornerBracket, SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";
import { GithubIcon, ExternalLinkIcon } from "@/components/Icons";

export default function ProjectsPage() {
  const projects = getItemsFromDirectory<ProjectMeta>("projects");

  return (
    <div className="flex flex-col gap-10 max-w-[660px]">
      <div>
        <div className="mb-4">
          <Link href="/#projects" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <SectionArchBadge label="engineering deep dives" />
        <h1 className="text-[36px] font-light text-[var(--ink)] mt-1">projects</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          Technical architecture, engineering decisions, and implementation breakdowns for featured projects.
        </p>
      </div>

      <div className="flex flex-col gap-14">
        {projects.map((proj) => (
          <article
            key={proj.slug}
            id={proj.slug}
            className="relative flex flex-col gap-4 scroll-mt-12 p-6 rounded border border-[var(--line)] bg-[var(--surface)] group"
          >
            <HaveliCornerBracket position="top-right" />

            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--line)] pb-3">
              <div>
                <h2 className="text-2xl font-serif font-medium text-[var(--ink)] flex items-center gap-2">
                  <span className="text-xs text-[var(--accent-gold)]">❖</span>
                  {proj.data.title}
                </h2>
                <span className="font-mono text-xs text-[var(--accent)] mt-0.5 block">
                  {proj.data.role} • {proj.data.period}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                {proj.data.github && (
                  <a
                    href={proj.data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nn-pill text-xs py-1 px-2.5 flex items-center gap-1.5"
                    aria-label={`GitHub repository for ${proj.data.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5 fill-current" />
                    <span>code</span>
                  </a>
                )}
                {proj.data.live && (
                  <a
                    href={proj.data.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nn-pill text-xs py-1 px-2.5 flex items-center gap-1.5"
                    aria-label={`Live demo for ${proj.data.title}`}
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    <span>live demo</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[var(--ink-soft)] font-sans">
              {proj.data.summary}
            </p>

            {proj.data.metrics && (
              <div className="font-mono text-xs text-[var(--accent)] bg-[var(--surface-sunk)] px-3 py-2 rounded border border-[var(--line)]">
                <span className="text-[var(--accent-gold)] font-semibold">key metric:</span> {proj.data.metrics}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {proj.data.stack?.map((tech) => (
                <span key={tech} className="nn-tag text-xs font-mono">
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>

            {proj.content && (
              <div className="mt-4 pt-4 border-t border-[var(--line)] prose prose-invert max-w-none text-xs leading-relaxed text-[var(--ink-soft)] space-y-4">
                <ReactMarkdown
                  components={{
                    h3: ({ children }) => (
                      <h3 className="text-sm font-semibold text-[var(--ink)] uppercase font-mono tracking-wider pt-4 pb-1 border-b border-[var(--line)] flex items-center gap-2">
                        <span className="text-[var(--accent-gold)] text-xs">॥</span>
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-xs leading-6 text-[var(--ink-soft)] font-sans">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[var(--ink-soft)] font-sans">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-outside pl-4 space-y-1 text-xs text-[var(--ink-soft)] font-sans">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="leading-5">{children}</li>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-[var(--surface-sunk)] border border-[var(--line)] rounded p-3 text-[11px] font-mono overflow-x-auto text-[var(--ink)] my-3 leading-tight">{children}</pre>
                    ),
                    code: ({ children, className }) => {
                      const isInline = !className;
                      return isInline ? (
                        <code className="bg-[var(--surface-sunk)] px-1 py-0.5 rounded text-[11px] font-mono text-[var(--accent-gold)]">{children}</code>
                      ) : (
                        <code>{children}</code>
                      );
                    },
                  }}
                >
                  {proj.content}
                </ReactMarkdown>
              </div>
            )}
          </article>
        ))}
      </div>

      <JaaliFriezeDivider />
    </div>
  );
}
