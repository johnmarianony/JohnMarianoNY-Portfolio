import type { Metadata } from "next";
import { CaseArchive, CaseCard } from "@/components/case-card";
import { getAllCases, getFeaturedCases } from "@/content/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected platform experience and UX strategy case studies, federal, War Department, and enterprise.",
};

export default function WorkPage() {
  const featured = getFeaturedCases();
  const archive = getAllCases().filter((study) => !study.featured);

  return (
    <div className="container work-index">
      <header className="page-hero">
        <p className="label">Work</p>
        <h1>Selected work</h1>
        <p>
          Featured engagements first. Archive pieces stay available without
          crowding the hiring skim.
        </p>
      </header>

      <section aria-labelledby="featured-heading">
        <p className="label">Featured</p>
        <h2 id="featured-heading" className="section__title" style={{ fontSize: "var(--text-display-m)", marginTop: 14 }}>
          Six featured engagements
        </h2>
        <div className="grid2">
          {featured.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {archive.length > 0 ? (
        <div className="archive">
          <div>
            <p className="label">Archive</p>
            <h3>Seven more case studies</h3>
          </div>
          <CaseArchive studies={archive} />
        </div>
      ) : null}
    </div>
  );
}
