import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCases, getCaseBySlug } from "@/content/cases";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseBySlug(slug);
  if (!study) return { title: "Case study" };
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseBySlug(slug);
  if (!study) notFound();

  return (
    <div className="container">
      <header className={`case-hero${study.dowAccent ? " dow" : ""}`}>
        <p className="case-hero__client">
          {study.client} · {study.sector}
        </p>
        <h1>{study.title}</h1>
        <p className="case-hero__proof">{study.proof}</p>
        <p style={{ color: "var(--fg-muted)", margin: 0, maxWidth: "40rem" }}>
          {study.role} · {study.dates}
          {study.clearance === "sterilized"
            ? " · Public details sterilized for clearance"
            : null}
        </p>
        {study.thumb ? (
          <div className="case-hero__media">
            <Image
              src={study.thumb}
              alt={study.thumbAlt ?? ""}
              width={1120}
              height={630}
              sizes="(max-width: 1120px) 100vw, 1120px"
              className="case-hero__thumb"
              priority
            />
          </div>
        ) : null}
      </header>

      <article className="prose-block">
        <h2>Outcomes</h2>
        <ul>
          {study.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Context</h2>
        <p>{study.context}</p>

        <h2>Approach</h2>
        <ul>
          {study.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Reflection</h2>
        <p>{study.reflection}</p>

        <h2>Next</h2>
        <p>
          Want the deeper walkthrough or related artifacts?{" "}
          <a href={`mailto:${site.email}`}>Email {site.email}</a> or{" "}
          <Link href="/contact">use the contact page</Link>.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/work" className="btn btn--ghost">
            ← All work
          </Link>
        </p>
      </article>
    </div>
  );
}
