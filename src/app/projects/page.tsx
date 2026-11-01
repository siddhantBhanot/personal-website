import { getItemsFromDirectory, ProjectMeta } from "@/lib/markdown";
import { GithubIcon } from "@/components/Icons";
import { ExternalLink, Cpu } from "lucide-react";

export default function ProjectsPage() {
  const projects = getItemsFromDirectory<ProjectMeta>("projects");

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Engineering & Systems Projects
        </h1>
        <p className="text-sm text-[var(--text-secondary)] font-mono">
          Architectural deep dives, high-concurrency prototypes, and infrastructure services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.slug}
            className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--accent-amber)] font-medium">
                  {proj.data.role} • {proj.data.period}
                </span>
                <div className="flex items-center gap-2">
                  {proj.data.github && (
                    <a
                      href={proj.data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {proj.data.live && (
                    <a
                      href={proj.data.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                  {proj.data.title}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  {proj.data.summary}
                </p>
              </div>

              {proj.data.metrics && (
                <div className="p-3 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
                    <span>Observed Scale & Benchmarks:</span>
                  </div>
                  <div className="text-xs font-mono font-medium text-[var(--accent-terracotta-light)] pl-5">
                    {proj.data.metrics}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
              {proj.data.stack?.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
