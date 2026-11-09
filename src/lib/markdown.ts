import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface MarkdownItem<T = Record<string, unknown>> {
  slug: string;
  data: T;
  content: string;
}

export interface NoteMeta {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readingTime: string;
  difficulty?: "Intermediate" | "Advanced" | "Deep Dive";
}

export interface BlogMeta {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export interface ProjectMeta {
  title: string;
  summary: string;
  period: string;
  role: string;
  metrics: string;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  order?: number;
}

export function getItemsFromDirectory<T>(subdir: string): MarkdownItem<T>[] {
  const dirPath = path.join(contentDirectory, subdir);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const items = fileNames
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        data: data as T,
        content,
      };
    });

  // Sort by order ascending if available, then date descending
  return items.sort((a, b) => {
    const orderA = (a.data as { order?: number }).order ?? 999;
    const orderB = (b.data as { order?: number }).order ?? 999;
    if (orderA !== orderB) return orderA - orderB;

    const dateA = (a.data as { date?: string }).date || "";
    const dateB = (b.data as { date?: string }).date || "";
    return dateB.localeCompare(dateA);
  });
}

export function getItemBySlug<T>(subdir: string, slug: string): MarkdownItem<T> | null {
  const dirPath = path.join(contentDirectory, subdir);
  const mdPath = path.join(dirPath, `${slug}.md`);
  const mdxPath = path.join(dirPath, `${slug}.mdx`);

  let targetPath = "";
  if (fs.existsSync(mdPath)) {
    targetPath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    targetPath = mdxPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    data: data as T,
    content,
  };
}

