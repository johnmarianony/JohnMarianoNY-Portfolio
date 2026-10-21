import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.positioning,
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-hero page-hero--ink">
        <h1>About</h1>
        <p>{site.positioning}</p>
      </header>

      <div className="about-layout">
        <div className="stack">
          <p>
            I’m John Mariano—a platform experience strategist and designer with
            20+ years turning ambiguous multi-app ecosystems into clearer
            delivery. At Accenture Federal Services I lead UX on large-scale
            government platforms where content strategy, service design, and
            cross-functional alignment have to hold under regulation and
            clearance.
          </p>
          <p>
            I’m a storyteller and mentor as much as a strategist—most proud when
            junior designers leave a project more fluent in constraint than when
            they arrived.
          </p>
          <p>
            Off the federal critical path I draw: dense ink, wrong geometry,
            cartoon timing. Same obsession with structure—different stakes. The
            sketchbooks keep the hand honest when the work has to stay
            sterilized.
          </p>
          <p>
            I use AI as a craft amplifier with a published ethical line—human-led,
            purpose-driven. I write about that practice on{" "}
            <a
              href={site.social.substack}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}
            >
              My Neural Graffiti ↗
            </a>
            .
          </p>
          <p>
            NN/g certified in UX Management. Cleared to support sensitive federal
            projects. Public case studies are sterilized; deeper walkthroughs
            available on request.
          </p>
          <p>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}
            >
              LinkedIn ↗
            </a>
            {" · "}
            <Link href="/contact" style={{ color: "var(--accent)" }}>
              Contact
            </Link>
          </p>
        </div>

        <aside className="about-ink" aria-label="Studio plate">
          <div className="about-ink__frame">
            <Image
              src="/images/studio/ink-mashups.jpg"
              alt="Selection of John Mariano ink sketchbook plates"
              width={720}
              height={720}
              sizes="(max-width: 900px) 100vw, 360px"
              className="about-ink__img"
            />
          </div>
          <p className="about-ink__caption">
            Sketchbook plates — hatch, mashup, and moonlit wrongness.
          </p>
        </aside>
      </div>
    </div>
  );
}
