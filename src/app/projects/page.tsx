import Link from "next/link";
import { getItemsFromDirectory, ProjectMeta } from "@/lib/markdown";
import { HaveliCornerBracket, SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

export default function ProjectsPage() {
  const projects = getItemsFromDirectory<ProjectMeta>("projects");

  return (
    <div className="flex flex-col gap-10 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#projects" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <SectionArchBadge label="systems architecture" />
        <h1 className="text-[36px] font-light text-[var(--ink)] mt-1">projects & systems</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          architectural write-ups, high-concurrency benchmarks, and infrastructure services.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((proj) => (
          <article
            key={proj.slug}
            id={proj.slug}
            className="relative flex flex-col gap-3 scroll-mt-12 p-6 rounded border border-[var(--line)] bg-[var(--surface)] group"
          >
            <HaveliCornerBracket position="top-right" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-medium text-[var(--ink)] flex items-center gap-2">
                <span className="text-xs text-[var(--accent-gold)]">❖</span>
                {proj.data.title.toLowerCase()}
              </h2>
              <span className="font-mono text-xs text-[var(--ink-faint)]">
                {proj.data.period}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
              {proj.data.summary}
            </p>

            {proj.data.metrics && (
              <div className="font-mono text-xs text-[var(--accent)] bg-[var(--surface-sunk)] p-2.5 rounded border border-[var(--line)]">
                scale: {proj.data.metrics}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {proj.data.stack?.map((tech) => (
                <span key={tech} className="nn-tag text-xs">
                  {tech.toLowerCase()}
                </span>
              ))}
            </div>

            {proj.content && (
              <div className="text-xs leading-relaxed text-[var(--ink-soft)] mt-2 whitespace-pre-line border-t border-[var(--line)] pt-3">
                {proj.content}
              </div>
            )}
          </article>
        ))}
      </div>

      <JaaliFriezeDivider />
    </div>
  );
}
