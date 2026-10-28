import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCases,
  getCaseBySlug,
  processSteps,
} from "@/content/cases";
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

  const artifacts = study.artifacts ?? [];
  const metrics = study.metrics ?? [];

  return (
    <div className={`case-page${study.dowAccent ? " case-page--dow" : ""}`}>
      <div className="container">
        <header className={`case-hero${study.dowAccent ? " dow" : ""}`}>
          <p className="case-hero__client">
            {study.client} · {study.sector}
          </p>
          <h1>{study.title}</h1>
          <p className="case-hero__proof">{study.proof}</p>
          <p className="case-hero__meta">
            {study.role} · {study.dates}
            {study.clearance === "sterilized"
              ? " · Public details sterilized for clearance"
              : null}
          </p>
          {study.team ? (
            <p className="case-hero__team">Team: {study.team}</p>
          ) : null}
        </header>
      </div>

      {metrics.length > 0 ? (
        <section className="case-metrics" aria-label="Key metrics">
          <div className="container case-metrics__grid">
            {metrics.map((m) => (
              <div key={m.value + m.label} className="case-metric">
                <p className="case-metric__value">{m.value}</p>
                <p className="case-metric__label">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="container">
        <section className="case-process" aria-label="How the work moved">
          <p className="section__eyebrow">How it moved</p>
          <ol className="case-process__list">
            {processSteps.map((step, i) => (
              <li key={step.label} className="case-process__item">
                <span className="case-process__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="case-process__label">{step.label}</p>
                  <p className="case-process__detail">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <article className="case-article">
          <section className="case-section">
            <h2>Overview</h2>
            <p>{study.summary}</p>
          </section>

          <section className="case-section">
            <h2>Outcomes</h2>
            {study.outcomesIntro ? <p>{study.outcomesIntro}</p> : null}
            <ul>
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {artifacts[0] ? (
            <figure
              className={`case-figure${artifacts[0].portrait ? " case-figure--portrait" : ""}`}
            >
              <div className="case-figure__frame">
                <Image
                  src={artifacts[0].src}
                  alt={artifacts[0].alt}
                  width={artifacts[0].portrait ? 820 : 1120}
                  height={artifacts[0].portrait ? 1106 : 630}
                  sizes="(max-width: 1120px) 100vw, 1120px"
                  className="case-figure__img"
                  priority
                />
              </div>
              <figcaption>{artifacts[0].caption}</figcaption>
            </figure>
          ) : study.thumb ? (
            <figure className="case-figure">
              <div className="case-figure__frame">
                <Image
                  src={study.thumb}
                  alt={study.thumbAlt ?? ""}
                  width={1120}
                  height={630}
                  sizes="(max-width: 1120px) 100vw, 1120px"
                  className="case-figure__img"
                  priority
                />
              </div>
              <figcaption>{study.thumbAlt}</figcaption>
            </figure>
          ) : null}

          <section className="case-section">
            <h2>Context</h2>
            <p>{study.context}</p>
          </section>

          {study.pullQuote ? (
            <blockquote className="case-quote">
              <p>{study.pullQuote}</p>
              {study.pullQuoteCite ? (
                <footer className="case-quote__cite">— {study.pullQuoteCite}</footer>
              ) : null}
            </blockquote>
          ) : null}

          <section className="case-section">
            <h2>Approach</h2>
            <ul>
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {artifacts.length > 1 ? (
            <section className="case-gallery" aria-label="Project artifacts">
              <h2 className="case-gallery__title">Artifacts</h2>
              <div className="case-gallery__grid">
                {artifacts.slice(1).map((art) => (
                  <figure
                    key={art.src}
                    className={`case-figure case-figure--gallery${art.portrait ? " case-figure--portrait" : ""}`}
                  >
                    <div className="case-figure__frame">
                      <Image
                        src={art.src}
                        alt={art.alt}
                        width={art.portrait ? 820 : 1120}
                        height={art.portrait ? 1106 : 630}
                        sizes={
                          art.portrait
                            ? "(max-width: 700px) 100vw, 360px"
                            : "(max-width: 700px) 100vw, 520px"
                        }
                        className="case-figure__img"
                      />
                    </div>
                    <figcaption>{art.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <section className="case-section">
            <h2>Reflection</h2>
            <p>{study.reflection}</p>
          </section>

          <section className="case-section case-section--next">
            <h2>Next</h2>
            <p>
              Want the deeper walkthrough or related artifacts?{" "}
              <a href={`mailto:${site.email}`}>Email {site.email}</a> or{" "}
              <Link href="/contact">use the contact page</Link>.
            </p>
            <p className="case-back">
              <Link href="/work" className="btn btn--ghost">
                ← All work
              </Link>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
