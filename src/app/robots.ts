import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
