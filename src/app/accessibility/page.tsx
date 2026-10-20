import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for John Mariano’s portfolio—commitment and how to report issues.",
};

export default function AccessibilityPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>Accessibility</h1>
        <p>
          This site aims to meet WCAG 2.2 Level AA for the pages we ship—because
          accessibility is part of the craft story, not a footer afterthought.
        </p>
      </header>

      <div className="stack">
        <p>
          We use semantic HTML, visible focus styles, sufficient contrast on
          primary text, and respect{" "}
          <code style={{ color: "var(--accent)" }}>prefers-reduced-motion</code>
          . Case studies call out sterilized content honestly rather than hiding
          gaps behind decorative UI.
        </p>
        <p>
          Known limits in this preview: resume PDF and rich case artifacts are
          still landing; some images will gain fuller text alternatives as
          assets are added.
        </p>
        <p>
          If you hit a barrier, email{" "}
          <a href={`mailto:${site.email}`} style={{ color: "var(--accent)" }}>
            {site.email}
          </a>{" "}
          with the page URL and what you were trying to do. I’ll prioritize a
          fix.
        </p>
      </div>
    </div>
  );
}
