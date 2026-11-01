import Link from "next/link";
import { getItemsFromDirectory, BlogMeta } from "@/lib/markdown";
import { BookOpen, ArrowRight } from "lucide-react";

export default function BlogsPage() {
  const blogs = getItemsFromDirectory<BlogMeta>("blogs");

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-[var(--accent-terracotta)]" />
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Technical Blogs & Essays
          </h1>
        </div>
        <p className="text-sm text-[var(--text-secondary)] font-mono">
          Long-form retrospectives, architectural decisions, and production war stories.
        </p>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent-terracotta)]/60 hover:bg-[var(--bg-surface-hover)] transition-all group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-2">
                {blog.data.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--badge-bg)] text-[var(--accent-terracotta)] border border-[var(--badge-border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs font-mono text-[var(--text-muted)]">
                {blog.data.readingTime} • {blog.data.date}
              </div>
            </div>

            <h2 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
              {blog.data.title}
            </h2>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              {blog.data.summary}
            </p>

            <div className="mt-4 flex items-center gap-1 text-xs font-mono text-[var(--accent-amber)] group-hover:translate-x-1 transition-transform">
              <span>Read article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
