import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__tag">Platform experience strategy</p>
        </div>
        <div className="site-footer__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.social.substack}
            target="_blank"
            rel="noopener noreferrer"
          >
            Writing ↗
          </a>
          <Link href="/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
