import Link from "next/link";
import { getItemsFromDirectory, NoteMeta } from "@/lib/markdown";

export default function NotesIndexPage() {
  const notes = getItemsFromDirectory<NoteMeta>("notes");

  return (
    <div className="flex flex-col gap-10 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#notes" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <h1 className="text-[36px] font-light text-[var(--ink)]">engineering notes</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          deep dives into database engines, concurrency primitives, and distributed systems design.
        </p>
      </div>

      <ul className="nn-links">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link className="nn-link" href={`/notes/${note.slug}`}>
              <span className="nn-link-title">{note.data.title.toLowerCase()}</span>
              <span className="nn-arrow" aria-hidden="true">→</span>
              <span className="nn-link-desc">{note.data.summary}</span>
              <span className="nn-link-meta">
                {note.data.readingTime} • {note.data.tags?.join(", ").toLowerCase()}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
