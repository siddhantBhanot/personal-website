import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemsFromDirectory, getItemBySlug, BlogMeta } from "@/lib/markdown";

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
    <article className="post">
      <div className="mb-6">
        <Link href="/#blogs" className="nn-pill">
          <span>← writing</span>
        </Link>
      </div>

      <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider block mb-2">
        essay
      </span>

      <h1>{blog.data.title.toLowerCase()}</h1>

      <p className="nn-post-subtitle">{blog.data.summary}</p>

      <div className="nn-post-meta">
        <span>{blog.data.date}</span>
        <span>•</span>
        <span>{blog.data.readingTime}</span>
        <span>•</span>
        <span>{blog.data.tags?.join(", ").toLowerCase()}</span>
      </div>

      <div className="blog-body whitespace-pre-line leading-7 text-[var(--ink-soft)]">
        {blog.content}
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--line)]">
        <Link href="/#blogs" className="nn-pill">
          <span>← back to all essays</span>
        </Link>
      </div>
    </article>
  );
}
