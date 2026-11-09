import { techStackData } from "@/data/tech-stack";

export function TechStackGrid() {
  return (
    <div className="space-y-6">
      {techStackData.map((category) => (
        <div
          key={category.category}
          className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/40 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-1">
            <h3 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terracotta)]" />
              {category.category}
            </h3>
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
  );
}

