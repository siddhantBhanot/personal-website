import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemsFromDirectory, getItemBySlug, BlogMeta } from "@/lib/markdown";
import { HaveliCornerBracket, SectionArchBadge, JaaliFriezeDivider } from "@/components/IndicMotif";

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
          <span>← Writing</span>
        </Link>
      </div>

      <div className="mb-2">
        <SectionArchBadge label="Technical Essay" />
      </div>

      <h1>{blog.data.title}</h1>

      {/* Jharokha Alcove Summary */}
      <div className="jharokha-alcove my-6">
        <HaveliCornerBracket position="top-right" />
        <p className="nn-post-subtitle my-0">{blog.data.summary}</p>
      </div>

      <div className="nn-post-meta">
        <span>{blog.data.date}</span>
        <span>•</span>
        <span>{blog.data.readingTime}</span>
        <span>•</span>
        <span>{blog.data.tags?.join(", ")}</span>
      </div>

      <div className="blog-body whitespace-pre-line leading-7 text-[var(--ink-soft)]">
        {blog.content}
      </div>

      <JaaliFriezeDivider className="my-12" />

      <div>
        <Link href="/#blogs" className="nn-pill">
          <span>← Back to all Essays</span>
        </Link>
      </div>
    </article>
  );
}
