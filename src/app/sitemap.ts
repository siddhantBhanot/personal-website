import type { MetadataRoute } from "next";
import { getItemsFromDirectory, BlogMeta, NoteMeta } from "@/lib/markdown";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const lastModified = new Date("2026-11-09T00:00:00.000Z");

  // Core Pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic Blog Posts
  const blogs = getItemsFromDirectory<BlogMeta>("blogs");
  blogs.forEach((blog) => {
    routes.push({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // Dynamic Engineering Notes
  const notes = getItemsFromDirectory<NoteMeta>("notes");
  notes.forEach((note) => {
    routes.push({
      url: `${baseUrl}/notes/${note.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}
