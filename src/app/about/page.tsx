import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.positioning,
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>About</h1>
        <p>{site.positioning}</p>
      </header>

      <div className="stack stack--measure">
        <p>
          I’m John Mariano, a platform experience strategist and designer with
          20+ years turning ambiguous multi-app ecosystems into clearer
          delivery. At Accenture Federal Services I lead UX on large-scale
          government platforms where content strategy, service design, and
          cross-functional alignment have to hold under regulation and
          clearance.
        </p>
        <p>
          From 2011 to 2018 I worked at Context Optional and Adobe, building
          Facebook marketing apps, cutting Social onboarding from six months to
          two weeks, designing the interactive sales toolkit for Adobe Summit,
          and advising Darden on online ordering accessibility.
        </p>
        <p>
          From March 2019 to January 2022 I was the first HCI design lead for
          Simcenter STAR-CCM+. I stood up a design practice I later ran as
          acting manager, facilitated a three-day discovery workshop that set
          our three-year approach, mapped the first A to Z workflow, and helped
          shape the cloud pay-as-you-go path.
        </p>
        <p>
          I’m a storyteller and mentor as much as a strategist, most proud when
          junior designers leave a project more fluent in constraint than when
          they arrived.
        </p>
        <p>
          I use AI as a craft amplifier with a published ethical line, human-led,
          purpose-driven. I write about that practice on{" "}
          <a
            href={site.social.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            My Neural Graffiti
            <span className="sr-only"> (opens in new tab)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
          .
        </p>
        <p>
          NN/g certified in UX Management. Cleared to support sensitive federal
          projects. Public case studies are sterilized; deeper walkthroughs
          available on request.
        </p>
        <p className="stack__cta">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
          {" · "}
          <Link href="/contact" className="text-accent">
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
}
