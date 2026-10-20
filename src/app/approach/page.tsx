import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How John Mariano leads platform experience under constraint—methods, mentorship, and human-led AI craft.",
};

export default function ApproachPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>Approach</h1>
        <p>
          Named methods for platform work under constraint—teachable, short, and
          built for delivery pressure.
        </p>
      </header>

      <div className="stack">
        <h2 className="section__title" style={{ fontSize: "1.5rem" }}>
          Constraint as the brief
        </h2>
        <p>
          Federal and mission platforms don’t fail from lack of screens—they
          fail when teams ignore policy, clearance, election clocks, and
          platform reality. I translate those limits into design moves teams can
          ship.
        </p>

        <h2 className="section__title" style={{ fontSize: "1.5rem" }}>
          Dual-path UX
        </h2>
        <p>
          Modernization that strands power users dies quietly. Dual-path
          patterns let expert workflows and clearer journeys coexist while the
          platform migrates.
        </p>

        <h2 className="section__title" style={{ fontSize: "1.5rem" }}>
          Microjourneys over monolith myths
        </h2>
        <p>
          Big platforms move when you sequence small, evidence-backed journeys—
          then reuse the pattern across bureaus and product lines.
        </p>

        <h2 className="section__title" style={{ fontSize: "1.5rem" }}>
          T³ Loop — Talk, Think, Tweak
        </h2>
        <p>
          For AI-assisted craft: stay human-led. Prompt with purpose, review
          like a strategist, and refuse outputs that break trust. I write about
          that practice on{" "}
          <a
            href="https://johnmarianony.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
          >
            My Neural Graffiti ↗
          </a>
          .
        </p>

        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/work" className="btn btn--primary">
            See it in the work
          </Link>
        </p>
      </div>
    </div>
  );
}
