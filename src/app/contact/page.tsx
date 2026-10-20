import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact John Mariano about platform experience and UX strategy roles.",
};

export default function ContactPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>Contact</h1>
        <p>
          One primary path—email. LinkedIn if you prefer a warm intro. No form
          maze.
        </p>
      </header>

      <div className="contact-panel">
        <a href={`mailto:${site.email}`} className="btn btn--primary">
          Email {site.email}
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost"
        >
          LinkedIn ↗
        </a>
        <p style={{ color: "var(--fg-muted)", marginTop: "1rem" }}>
          For cleared or invite-only artifacts, say so in your note—I’ll share
          what’s appropriate.
        </p>
      </div>
    </div>
  );
}
