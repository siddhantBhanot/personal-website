import Link from "next/link";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { SteppedBaoliDot, SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

export default function ExperienceIndexPage() {
  return (
    <div className="flex flex-col gap-10 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#experience" className="nn-pill">
            <span>← Home</span>
          </Link>
        </div>
        <SectionArchBadge label="Production History" />
        <h1 className="text-[30px] sm:text-[34px] font-medium text-[var(--ink)] mt-1 font-mono">Experience</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          4+ Years of designing and maintaining distributed fintech and telecom systems in production.
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
              <span className="nn-tl-role">{exp.role}</span>
              <span className="nn-tl-when">{exp.period}</span>
            </div>
            <span className="nn-tl-org">
              {exp.company} • {exp.location}
            </span>
            <ul className="nn-tl-bullets mt-3">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Education Block */}
      <div className="p-5 rounded border border-[var(--line)] bg-[var(--surface)] flex flex-wrap items-baseline justify-between gap-2">
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

      <JaaliFriezeDivider />
    </div>
  );
}
