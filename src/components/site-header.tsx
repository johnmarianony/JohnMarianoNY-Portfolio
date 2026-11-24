"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: site.social.substack, label: "Writing", external: true },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/work"
      ? pathname === "/work" || pathname.startsWith("/work/")
      : pathname === href;

  return (
    <header className="hdr">
      <div className="wrap">
        <Link href="/" className="mark" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav id="site-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Primary">
          {nav.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
                <span className="sr-only"> (opens in new tab)</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={isCurrent(item.href) ? "on" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="cta"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
