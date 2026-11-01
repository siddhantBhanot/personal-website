import Link from "next/link";
import { getItemsFromDirectory, BlogMeta } from "@/lib/markdown";
import { SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

export default function BlogsIndexPage() {
  const blogs = getItemsFromDirectory<BlogMeta>("blogs");

  return (
    <div className="flex flex-col gap-10 max-w-[620px]">
      <div>
        <div className="mb-4">
          <Link href="/#blogs" className="nn-pill">
            <span>← home</span>
          </Link>
        </div>
        <SectionArchBadge label="essays & retrospectives" />
        <h1 className="text-[36px] font-light text-[var(--ink)] mt-1">writing & essays</h1>
        <p className="text-sm font-mono text-[var(--ink-faint)] mt-2">
          reflections on microservices, database bottlenecks, and engineering rigor.
        </p>
      </div>

      <ul className="nn-links">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link className="nn-link group" href={`/blogs/${blog.slug}`}>
              <span className="nn-link-title flex items-center gap-2">
                <span className="text-xs text-[var(--accent-gold)] opacity-70 group-hover:opacity-100 transition-opacity">❖</span>
                {blog.data.title.toLowerCase()}
              </span>
              <span className="nn-arrow" aria-hidden="true">→</span>
              <span className="nn-link-desc">{blog.data.summary}</span>
              <span className="nn-link-meta">
                {blog.data.date} • {blog.data.readingTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <JaaliFriezeDivider />
    </div>
  );
}
