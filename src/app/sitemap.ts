import type { MetadataRoute } from "next";
import { getAllCases } from "@/content/cases";

const base = "https://johnmarianony.com";

const staticRoutes = [
  "",
  "/work",
  "/approach",
  "/about",
  "/contact",
  "/accessibility",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({
      url: path ? `${base}${path}` : base,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...getAllCases().map((study) => ({
      url: `${base}/work/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: study.featured ? 0.8 : 0.6,
    })),
  ];
}
