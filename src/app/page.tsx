import Link from "next/link";
import { CaseCard } from "@/components/case-card";
import { FeaturedCase } from "@/components/featured-case";
import { Hero } from "@/components/hero";
import { getFeaturedCases } from "@/content/cases";
import { site } from "@/content/site";

function Chapter({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="chapter" aria-hidden="true">
      <span className="chapter__num">{number}</span>
      <span className="chapter__rule" />
      <span className="chapter__label">{label}</span>
    </div>
  );
}

export default function HomePage() {
  const featured = getFeaturedCases();
  const [lead, ...rest] = featured;

  return (
    <>
      <Hero />

      <section className="section section--work">
        <div className="container">
          <Chapter number="02" label="Selected work" />
          <header className="section-head">
            <p className="section__eyebrow">Selected work</p>
            <h2 className="section__title">Experience marks the spot</h2>
            <p className="section__lede">
              Six featured engagements—image-first, outcome-led. War Department
              work first; sterilized artifacts in place of cleared screens.
            </p>
          </header>

          {lead ? <FeaturedCase study={lead} /> : null}

          <div className="comic-sheet">
            <p className="comic-sheet__kicker">Continued · Strip pages</p>
            <div className="case-grid case-grid--gallery">
              {rest.map((study) => (
                <CaseCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--writing">
        <div className="container">
          <Chapter number="03" label="Writing" />
          <header className="section-head">
            <p className="section__eyebrow">Writing</p>
            <h2 className="section__title">From My Neural Graffiti</h2>
            <p className="section__lede">
              Platform leadership and AI craft on Substack—linked out so the
              portfolio stays a hiring skim, not a blog.
            </p>
          </header>
          <div className="writing-list writing-list--strip">
            {site.featuredPosts.map((post, i) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-item"
              >
                <span className="writing-item__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>
                  {post.title}
                  <span className="sr-only"> (opens in new tab)</span>
                  <span aria-hidden="true"> ↗</span>
                </h3>
                <p>{post.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--close">
        <div className="container">
          <Chapter number="04" label="Contact" />
          <div className="closing-panel">
            <h2 className="section__title">Let’s talk platforms</h2>
            <p className="section__lede">
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
