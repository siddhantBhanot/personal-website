import Link from "next/link";
import { profile } from "@/data/profile";
import { ContactEmail } from "@/components/ContactEmail";
import { SectionArchBadge, HaveliCornerBracket } from "@/components/IndicMotif";

export default function ContactIndexPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#contact" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <SectionArchBadge label="get in touch" />
        <h1 className="text-[30px] sm:text-[34px] font-medium text-[var(--ink)] mt-1 font-mono">contact</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          reach out for backend engineering, reactive distributed systems, or architecture consulting.
        </p>
      </div>

      <div className="jharokha-alcove">
        <HaveliCornerBracket position="top-right" />
        <div className="nn-prose">
          <p>
            i am based in {profile.location.toLowerCase()} (ist, utc+05:30) and available for backend engineering discussions, system design reviews, and senior development roles.
          </p>
        </div>
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
    </div>
  );
}
