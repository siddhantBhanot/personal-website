import Link from "next/link";
import { experiences } from "@/data/experience";
import { SteppedBaoliDot, SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

export default function ExperienceIndexPage() {
  return (
    <div className="flex flex-col gap-10 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#experience" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <SectionArchBadge label="production history" />
        <h1 className="text-[36px] font-light text-[var(--ink)] mt-1">experience</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          4+ years of designing and maintaining distributed systems in production.
        </p>
      </div>

      <ol className="nn-timeline">
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            className="nn-tl-item"
            data-current={idx === 0 ? "true" : "false"}
          >
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

      <JaaliFriezeDivider />
    </div>
  );
}
