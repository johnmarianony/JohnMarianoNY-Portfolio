import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div>
          <p className="name">{site.name}</p>
          <p className="tag">Platform experience strategy</p>
        </div>
        <ul>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </li>
          <li>
            <a href={site.social.substack} target="_blank" rel="noopener noreferrer">
              Writing
              <span className="sr-only"> (opens in new tab)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          </li>
          <li>
            <Link href="/accessibility">Accessibility</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
