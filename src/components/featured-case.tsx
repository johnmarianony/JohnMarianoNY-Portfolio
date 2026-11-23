import { CaseCard } from "@/components/case-card";
import type { CaseStudy } from "@/content/cases";

export function FeaturedCase({ study }: { study: CaseStudy }) {
  return <CaseCard study={study} lead />;
}
