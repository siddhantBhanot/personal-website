import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemsFromDirectory, getItemBySlug, NoteMeta } from "@/lib/markdown";
import { ArrowLeft, Calendar, Clock, Terminal } from "lucide-react";

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
    <article className="max-w-3xl mx-auto space-y-8 py-4">
      <div>
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all Engineering Notes</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          {note.data.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-xs font-mono bg-[var(--badge-bg)] text-[var(--accent-terracotta)] border border-[var(--badge-border)]"
            >
              {tag}
            </span>
          ))}
          {note.data.difficulty && (
            <span className="text-xs font-mono text-[var(--accent-amber)] font-medium">
              [{note.data.difficulty}]
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
          {note.data.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] mt-4 pb-6 border-b border-[var(--border-color)]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {note.data.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {note.data.readingTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
            <span>Engineering Deep Dive</span>
          </span>
        </div>
      </div>

      {/* Note Content */}
      <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed space-y-5 text-sm sm:text-base">
        <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs sm:text-sm font-mono text-[var(--text-primary)] italic">
          <span className="text-[var(--accent-terracotta)] font-bold">Executive TL;DR: </span>
          {note.data.summary}
        </div>

        <div className="whitespace-pre-line text-justify leading-7">
          {note.content}
        </div>
      </div>
    </article>
  );
}
