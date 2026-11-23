import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for John Mariano’s portfolio, Section 508 / WCAG commitment and how to report issues.",
};

export default function AccessibilityPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>Accessibility</h1>
        <p>
          This site is built to meet{" "}
          <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
            Section 508
          </strong>{" "}
          (as refreshed to incorporate WCAG 2.0 Level AA) and targets{" "}
          <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
            WCAG 2.2 Level AA
          </strong>{" "}
          for the pages we ship, accessibility is part of the craft story, not a
          footer afterthought.
        </p>
      </header>

      <div className="stack">
        <p>
          We use semantic HTML, a skip link to main content, visible keyboard
          focus styles, sufficient contrast on primary text and controls, link
          underlines in body copy, and respect{" "}
          <code style={{ color: "var(--accent)" }}>prefers-reduced-motion</code>
          . Case studies call out sterilized content honestly rather than hiding
          gaps behind decorative UI.
        </p>
        <p>
          Automated checks (axe-core against WCAG 2.x AA / Section 508 tags)
          currently report no violations on the pages we ship. Known limits in
          this preview: resume PDF and some rich case artifacts are still
          landing; decorative hero atmosphere imagery is marked decorative,
          while case and figure images carry descriptive alternatives. A full
          assistive-technology pass (screen reader + keyboard) remains welcome
          feedback.
        </p>
        <p>
          If you hit a barrier, email{" "}
          <a href={`mailto:${site.email}`} className="text-accent">
            {site.email}
          </a>{" "}
          with the page URL and what you were trying to do. I’ll prioritize a
          fix.
        </p>
      </div>
    </div>
  );
}
