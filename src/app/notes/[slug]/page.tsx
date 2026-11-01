import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemsFromDirectory, getItemBySlug, NoteMeta } from "@/lib/markdown";

export async function generateStaticParams() {
  const notes = getItemsFromDirectory<NoteMeta>("notes");
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getItemBySlug<NoteMeta>("notes", slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="post">
      <div className="mb-6">
        <Link href="/#notes" className="nn-pill">
          <span>← engineering notes</span>
        </Link>
      </div>

      <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider block mb-2">
        {note.data.difficulty || "engineering deep dive"}
      </span>

      <h1>{note.data.title.toLowerCase()}</h1>

      <p className="nn-post-subtitle">{note.data.summary}</p>

      <div className="nn-post-meta">
        <span>{note.data.date}</span>
        <span>•</span>
        <span>{note.data.readingTime}</span>
        <span>•</span>
        <span>{note.data.tags?.join(", ").toLowerCase()}</span>
      </div>

      <div className="blog-body whitespace-pre-line leading-7 text-[var(--ink-soft)]">
        {note.content}
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--line)]">
        <Link href="/#notes" className="nn-pill">
          <span>← back to all engineering notes</span>
        </Link>
      </div>
    </article>
  );
}
