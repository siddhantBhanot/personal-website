import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemsFromDirectory, getItemBySlug, NoteMeta } from "@/lib/markdown";
import { HaveliCornerBracket, SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

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

      <div className="mb-2">
        <SectionArchBadge label={note.data.difficulty || "engineering deep dive"} />
      </div>

      <h1>{note.data.title.toLowerCase()}</h1>

      {/* Jharokha Alcove Summary */}
      <div className="jharokha-alcove my-6">
        <HaveliCornerBracket position="top-right" />
        <p className="nn-post-subtitle my-0">{note.data.summary}</p>
      </div>

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

      <JaaliFriezeDivider className="my-12" />

      <div>
        <Link href="/#notes" className="nn-pill">
          <span>← back to all engineering notes</span>
        </Link>
      </div>
    </article>
  );
}
