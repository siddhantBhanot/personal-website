import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemsFromDirectory, getItemBySlug, BlogMeta } from "@/lib/markdown";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  const blogs = getItemsFromDirectory<BlogMeta>("blogs");
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getItemBySlug<BlogMeta>("blogs", slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8 py-4">
      <div>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-terracotta)] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all Blogs</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          {blog.data.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-xs font-mono bg-[var(--badge-bg)] text-[var(--accent-terracotta)] border border-[var(--badge-border)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
          {blog.data.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] mt-4 pb-6 border-b border-[var(--border-color)]">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {blog.data.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {blog.data.readingTime}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
            <span>Essay / Blog</span>
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed space-y-5 text-sm sm:text-base">
        <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs sm:text-sm font-mono text-[var(--text-primary)] italic">
          <span className="text-[var(--accent-terracotta)] font-bold">Summary: </span>
          {blog.data.summary}
        </div>

        <div className="whitespace-pre-line text-justify leading-7">
          {blog.content}
        </div>
      </div>
    </article>
  );
}
