import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://johnmarianony.com/sitemap.xml",
    host: "https://johnmarianony.com",
  };
}
