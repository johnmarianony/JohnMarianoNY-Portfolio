import type { Metadata } from "next";
import { Fraunces, Figtree, Syne } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Condensed/heavy accent face for kickers, proofs, panel marks */
const accent = Syne({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: site.titleTag,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  metadataBase: new URL("https://johnmarianony.com"),
  openGraph: {
    title: site.titleTag,
    description: site.metaDescription,
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable} h-full`}
    >
      <body className="page-shell antialiased">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
