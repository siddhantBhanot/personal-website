import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Engineering Experience
        </h1>
        <p className="text-sm text-[var(--text-secondary)] font-mono">
          4+ years of designing and maintaining distributed backend systems in production.
        </p>
      </div>

      <div className="relative border-l border-[var(--border-color)] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--accent-terracotta)] group-hover:bg-[var(--accent-amber)] transition-colors shadow-sm" />

            <div className="space-y-4 p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                <div>
                  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    {exp.role}
                  </h2>
                  <div className="text-sm font-medium text-[var(--accent-amber)] flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                  Key Production Impacts:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-terracotta)] font-mono font-bold mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
