import type { Metadata } from "next";
import { CaseCard } from "@/components/case-card";
import { getAllCases, getFeaturedCases } from "@/content/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected platform experience and UX strategy case studies—federal and enterprise.",
};

export default function WorkPage() {
  const featured = getFeaturedCases();
  const archive = getAllCases().filter((c) => !c.featured);

  return (
    <div className="container">
      <header className="page-hero">
        <h1>Work</h1>
        <p>
          Featured engagements first. Archive pieces stay available without
          crowding the hiring skim.
        </p>
      </header>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <p className="section__eyebrow">Featured</p>
        <div className="case-grid case-grid--gallery">
          {featured.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {archive.length > 0 ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <p className="section__eyebrow">Archive</p>
          <h2 className="section__title">Additional work</h2>
          <div className="case-grid">
            {archive.map((study) => (
              <CaseCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
