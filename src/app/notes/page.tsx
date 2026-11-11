import type { Metadata } from "next";
import Link from "next/link";
import { getItemsFromDirectory, NoteMeta } from "@/lib/markdown";
import { SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

export const metadata: Metadata = {
  title: "Engineering Notes & System Design",
  description:
    "Technical knowledge base and engineering notes by Siddhant Bhanot on distributed locking (Redis vs etcd), Postgres indexing, AES encryption WebFilters, and SAGA patterns.",
  alternates: {
    canonical: "/notes",
  },
  openGraph: {
    title: "Engineering Notes & System Design | Siddhant Bhanot",
    description:
      "Deep dives into database indexing, distributed concurrency primitives, and microservice resilience patterns.",
    url: "/notes",
  },
};

export default function NotesIndexPage() {
  const notes = getItemsFromDirectory<NoteMeta>("notes");

  return (
    <div className="flex flex-col gap-10 w-full max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#notes" className="nn-pill">
            <span>← Home</span>
          </Link>
        </div>
        <SectionArchBadge label="Technical Knowledge Base" />
        <h1 className="text-2xl sm:text-[34px] font-medium text-[var(--ink)] mt-1 font-mono">Engineering Notes</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          Deep dives into database engines, concurrency primitives, and distributed systems design.
        </p>
      </div>

      <ul className="nn-links">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link className="nn-link group" href={`/notes/${note.slug}`}>
              <span className="nn-link-title flex items-center gap-2">
                <span className="text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 transition-opacity">❖</span>
                {note.data.title}
              </span>
              <span className="nn-arrow" aria-hidden="true">→</span>
              <span className="nn-link-desc">{note.data.summary}</span>
              <span className="nn-link-meta">
                {note.data.readingTime} • {note.data.tags?.join(", ")}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <JaaliFriezeDivider />
    </div>
  );
}
