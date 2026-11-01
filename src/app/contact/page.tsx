import Link from "next/link";
import { profile } from "@/data/profile";
import { ContactEmail } from "@/components/ContactEmail";

export default function ContactIndexPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#contact" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <h1 className="text-[36px] font-light text-[var(--ink)]">contact</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          get in touch for distributed systems, backend engineering, or consulting.
        </p>
      </div>

      <div className="nn-prose">
        <p>
          i am based in india (ist, utc+05:30) and experienced working asynchronously with globally distributed teams.
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
    </div>
  );
}
