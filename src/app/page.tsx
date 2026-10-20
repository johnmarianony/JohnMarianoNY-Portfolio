import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { getFeaturedCases } from "@/content/cases";
import { site } from "@/content/site";

export default function HomePage() {
  const featured = getFeaturedCases();

  return (
    <>
      <section className="hero">
        <div className="hero__plane" aria-hidden="true" />
        <div className="container">
          <p className="sr-only">{site.name} — platform experience strategist</p>
          <h1 className="hero__brand">{site.name}</h1>
          <p className="hero__headline">{site.headline}</p>
          <p className="hero__support">{site.support}</p>
          <div className="hero__actions">
            <Link href={site.cta.primary.href} className="btn btn--primary">
              {site.cta.primary.label}
            </Link>
            <Link href={site.cta.secondary.href} className="btn btn--ghost">
              {site.cta.secondary.label}
            </Link>
          </div>
          <div className="hero__proofs" aria-label="Selected proof points">
            {site.proofs.map((proof) => (
              <div key={proof.value} className="proof">
                <p className="proof__value">{proof.value}</p>
                <p className="proof__label">{proof.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">Selected work</p>
          <h2 className="section__title">Outcome-first case studies</h2>
          <p className="section__lede">
            Six featured engagements—War Department platform work first, then
            federal and enterprise systems where constraint was the brief.
          </p>
          <div className="case-grid">
            {featured.map((study) => (
              <CaseCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section__eyebrow">Writing</p>
          <h2 className="section__title">From My Neural Graffiti</h2>
          <p className="section__lede">
            Platform leadership and AI craft on Substack—linked out so the
            portfolio stays a hiring skim, not a blog.
          </p>
          <div className="writing-list">
            {site.featuredPosts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-item"
              >
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
          <h2 className="section__title">Let’s talk platforms</h2>
          <p className="section__lede" style={{ marginBottom: "1.5rem" }}>
            Open to conversations about platform experience, federal delivery,
            and modernization under constraint.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Contact John
          </Link>
        </div>
      </section>
    </>
  );
}
