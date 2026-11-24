import type { Metadata } from "next";
import Link from "next/link";
import { CaseArchive, CaseCard } from "@/components/case-card";
import { FeaturedCase } from "@/components/featured-case";
import { Hero } from "@/components/hero";
import { getAllCases, getFeaturedCases } from "@/content/cases";
import { site } from "@/content/site";

const groups = [
  {
    label: "Federal platforms",
    detail: "Accenture Federal · public details sterilized for clearance",
    start: 0,
    end: 3,
    lead: true,
  },
  {
    label: "Enterprise engineering software",
    detail: "Siemens STAR-CCM+ · March 2019 to January 2022",
    start: 3,
    end: 5,
    lead: false,
  },
  {
    label: "Enterprise SaaS",
    detail: "Adobe",
    start: 5,
    end: 6,
    lead: true,
  },
] as const;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedCases();
  const archive = getAllCases().filter((study) => !study.featured);

  return (
    <>
      <Hero />

      <section className="sec" id="selected-work">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="label">Selected work</p>
              <h2>Experience marks the spot</h2>
            </div>
            <p>
              Six featured engagements, image-first and outcome-led. Federal Defense
              Organization work first; sterilized artifacts in place of cleared screens.
            </p>
          </div>

          {groups.map((group) => {
            const items = featured.slice(group.start, group.end);
            if (items.length === 0) return null;
            const lead = group.lead ? items[0] : undefined;
            const grid = group.lead ? items.slice(1) : items;
            return (
              <div className="group" key={group.label}>
                <div className="era">
                  <span className="label">{group.label}</span>
                  <span className="c">{group.detail}</span>
                </div>
                {lead ? <FeaturedCase study={lead} /> : null}
                {grid.length > 0 ? (
                  <div className="grid2">
                    {grid.map((study) => (
                      <CaseCard key={study.slug} study={study} />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          {featured.length > 6 ? (
            <div className="grid2">
              {featured.slice(6).map((study) => (
                <CaseCard key={study.slug} study={study} />
              ))}
            </div>
          ) : null}

          <div className="archive">
            <div>
              <p className="label">Archive</p>
              <h3>Seven more case studies</h3>
              <Link href="/work" className="link">
                All 13 case studies →
              </Link>
            </div>
            <CaseArchive studies={archive} />
          </div>
        </div>
      </section>

      <section className="sec writing">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="label">Writing</p>
              <h2>From My Neural Graffiti</h2>
            </div>
            <p>
              Platform leadership and AI craft on Substack, linked out so the
              portfolio stays a hiring skim, not a blog.
            </p>
          </div>
          <div className="posts">
            {site.featuredPosts.map((post, index) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wpost"
              >
                <span className="n" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>
                  {post.title}
                  <span className="sr-only"> (opens in new tab)</span>
                </h3>
                <p>{post.blurb}</p>
                <p className="src">
                  Read on Substack <span aria-hidden="true">↗</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec close">
        <div className="wrap">
          <div>
            <p className="label">Contact</p>
            <h2>Let’s talk platforms</h2>
            <p>
              Open to conversations about platform experience, federal delivery,
              and modernization under constraint.
            </p>
          </div>
          <div className="acts">
            <Link href="/contact" className="btn primary">
              Contact John
            </Link>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
