import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { Hero } from "@/components/hero";
import { StudioBand } from "@/components/studio-band";
import { getFeaturedCases } from "@/content/cases";
import { site } from "@/content/site";

export default function HomePage() {
  const featured = getFeaturedCases();

  return (
    <>
      <Hero />

      <section className="section comic-strip">
        <div className="container">
          <header className="strip-header">
            <p className="section__eyebrow">Selected work</p>
            <h2 className="section__title">Experience marks the spot</h2>
            <p className="section__lede">
              Six featured engagements—image-first, outcome-led. War Department
              work first; sterilized artifacts in place of cleared screens.
            </p>
          </header>
          <div className="case-grid case-grid--gallery case-grid--panels">
            {featured.map((study) => (
              <CaseCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <StudioBand />

      <section className="section section--after-studio comic-strip">
        <div className="container">
          <header className="strip-header">
            <p className="section__eyebrow">Writing</p>
            <h2 className="section__title">From My Neural Graffiti</h2>
            <p className="section__lede">
              Platform leadership and AI craft on Substack—linked out so the
              portfolio stays a hiring skim, not a blog.
            </p>
          </header>
          <div className="writing-list writing-list--panels">
            {site.featuredPosts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-item writing-item--panel"
              >
                <span className="writing-item__kicker" aria-hidden="true">
                  Panel
                </span>
                <h3>
                  {post.title} <span aria-hidden="true">↗</span>
                </h3>
                <p>{post.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="closing-panel">
            <h2 className="section__title">Let’s talk platforms</h2>
            <p className="section__lede" style={{ marginBottom: "1.5rem" }}>
              Open to conversations about platform experience, federal delivery,
              and modernization under constraint.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Contact John
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
