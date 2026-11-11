import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ContactEmail } from "@/components/ContactEmail";
import { SectionArchBadge, HaveliCornerBracket } from "@/components/IndicMotif";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Siddhant Bhanot for backend engineering roles, distributed systems consulting, and technical collaborations. Located in Gurugram, India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Siddhant Bhanot | Backend Software Engineer",
    description:
      "Direct contact details and professional profiles for Siddhant Bhanot (email, LinkedIn, GitHub, LeetCode).",
    url: "/contact",
  },
};

export default function ContactIndexPage() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#contact" className="nn-pill">
            <span>← Home</span>
          </Link>
        </div>
        <SectionArchBadge label="Get in Touch" />
        <h1 className="text-2xl sm:text-[34px] font-medium text-[var(--ink)] mt-1 font-mono">Contact</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          Reach out for backend engineering, reactive distributed systems, or architecture consulting.
        </p>
      </div>

      <div className="jharokha-alcove">
        <HaveliCornerBracket position="top-right" />
        <div className="nn-prose">
          <p>
            I am based in {profile.location} (IST, UTC+05:30) and available for backend engineering discussions, system design reviews, and senior development roles.
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
          <span>LinkedIn</span>
          <span className="nn-arrow" aria-hidden="true">→</span>
        </a>
        <a
          className="nn-pill"
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
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
        <a
          className="nn-pill"
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <span className="nn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
