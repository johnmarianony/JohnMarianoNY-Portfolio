import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: site.social.substack, label: "Writing", external: true },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav__link"
              >
                {item.label}
                <span className="sr-only"> (opens in new tab)</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="site-nav__link">
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
