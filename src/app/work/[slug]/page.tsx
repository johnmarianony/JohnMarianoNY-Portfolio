import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CasePostcard } from "@/components/case-postcard";
import { StatBlocks } from "@/components/stat-blocks";
import {
  getAllCases,
  getCaseBySlug,
  processSteps,
  type CaseArtifact,
  type CasePostcard as CasePostcardData,
} from "@/content/cases";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

function CaseBeats({
  problem,
  opportunity,
  constraint,
}: {
  problem?: string;
  opportunity?: string;
  constraint?: string;
}) {
  const beats = [
    problem ? { label: "Problem", copy: problem } : null,
    opportunity ? { label: "Opportunity", copy: opportunity } : null,
    constraint ? { label: "Constraint", copy: constraint } : null,
  ].filter((beat): beat is { label: string; copy: string } => beat !== null);

  if (beats.length === 0) return null;

  return (
    <div className="case-beats">
      {beats.map((beat) => {
        const paragraphs = beat.copy
          .split(/\n\n+/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean);
        return (
          <div key={beat.label} className="case-beat">
            <h3>{beat.label}</h3>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function CaseFigure({
  art,
  preload = false,
  gallery = false,
}: {
  art: CaseArtifact;
  preload?: boolean;
  gallery?: boolean;
}) {
  return (
    <figure
      className={`case-figure${gallery ? " case-figure--gallery" : ""}${art.portrait ? " case-figure--portrait" : ""}${art.board ? " case-figure--board" : ""}`}
    >
      <div className="case-figure__frame">
        <Image
          src={art.src}
          alt={art.alt}
          width={art.width ?? (art.portrait ? 820 : 1120)}
          height={art.height ?? (art.portrait ? 1106 : 630)}
          sizes={
            gallery
              ? art.portrait
                ? "(max-width: 700px) 100vw, 360px"
                : "(max-width: 700px) 100vw, 520px"
              : "(max-width: 1120px) 100vw, 1120px"
          }
          className="case-figure__img"
          preload={preload}
        />
      </div>
      <figcaption>{art.caption}</figcaption>
    </figure>
  );
}

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseBySlug(slug);
  if (!study) return { title: "Case study" };
  const share = study.posterThumb;
  return {
    title: study.title,
    description: study.summary,
    ...(share
      ? {
          openGraph: {
            images: [
              {
                url: share,
                alt: study.thumbAlt,
                width: 1600,
                height: 1100,
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            images: [share],
          },
        }
      : {}),
  };
}

function PostcardSet({
  cards,
}: {
  cards: { card: CasePostcardData; index: number }[];
}) {
  if (cards.length === 0) return null;
  return cards.map(({ card, index }) => (
    <CasePostcard
      key={card.src}
      card={card}
      side={index % 2 === 0 ? "left" : "right"}
      eager={index === 0}
    />
  ));
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseBySlug(slug);
  if (!study) notFound();

  const artifacts = study.artifacts ?? [];
  const postcards = (study.postcards ?? []).map((card, index) => ({
    card,
    index,
  }));
  const postcardLayout = postcards.some(
    (item) => item.card.anchor === "outcome",
  );
  const hasStats = Boolean(study.stats?.length);
  const metrics = hasStats ? [] : (study.metrics ?? []);
  const inStory = (index: number) => postcardLayout || index > 0;
  const hero = postcardLayout ? undefined : artifacts[0];
  const challengeArts = artifacts.filter(
    (art, index) => inStory(index) && art.slot === "challenge",
  );
  const approachArts = artifacts.filter(
    (art, index) => inStory(index) && art.slot === "approach",
  );
  const outcomeArts = artifacts.filter(
    (art, index) => inStory(index) && art.slot === "outcome",
  );
  const galleryArts = artifacts.filter(
    (art, index) =>
      inStory(index) &&
      art.slot !== "challenge" &&
      art.slot !== "approach" &&
      art.slot !== "outcome",
  );
  const postcardsFor = (anchor: CasePostcardData["anchor"]) =>
    postcards.filter((item) => item.card.anchor === anchor);

  const storyAfterContext = (
    <>
      {challengeArts.map((art) => (
        <CaseFigure key={art.src} art={art} />
      ))}

      {study.pullQuote ? (
        <blockquote className="case-quote">
          <p>{study.pullQuote}</p>
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

      <PostcardSet cards={postcardsFor("approach")} />

      {approachArts.map((art) => (
        <CaseFigure key={art.src} art={art} />
      ))}

      {galleryArts.length > 0 ? (
        <section className="case-gallery" aria-label="Project artifacts">
          <h2 className="case-gallery__title">Artifacts</h2>
          <div className="case-gallery__grid">
            {galleryArts.map((art) => (
              <CaseFigure key={art.src} art={art} gallery />
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
    </>
  );

  return (
    <div className={`case-page${study.dowAccent ? " case-page--dow" : ""}`}>
      <div className="container">
        <header className={`case-hero${study.dowAccent ? " dow" : ""}`}>
          <p className="case-hero__client">
            {study.client} · {study.sector}
          </p>
          <h1>{study.title}</h1>
          {study.tags.length > 0 ? (
            <p className="case-hero__tags">
              {study.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
          ) : null}
          <p className="case-hero__proof">{study.proof}</p>
          <p className="case-hero__role">{study.role}</p>
          <p className="case-hero__meta">
            {study.dates}
            {study.clearance === "sterilized"
              ? " · Public details sterilized for clearance"
              : null}
          </p>
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

      {postcardLayout && hasStats && study.stats ? (
        <StatBlocks stats={study.stats} />
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

        <article
          className={`case-article${hasStats && !postcardLayout ? " case-article--split" : ""}`}
        >
          {postcardLayout ? null : (
            <section className="case-section">
              <h2>Outcomes</h2>
              <ul>
                {study.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {!postcardLayout && hero ? (
            <CaseFigure art={hero} preload />
          ) : !postcardLayout && study.thumb ? (
            <figure className="case-figure">
              <div className="case-figure__frame">
                <Image
                  src={study.thumb}
                  alt={study.thumbAlt ?? ""}
                  width={1120}
                  height={630}
                  sizes="(max-width: 1120px) 100vw, 1120px"
                  className="case-figure__img"
                  preload
                />
              </div>
              <figcaption>{study.thumbAlt}</figcaption>
            </figure>
          ) : null}

          <section className="case-section">
            <h2>Context</h2>
            <p>{study.context}</p>
            <CaseBeats
              problem={study.problem}
              opportunity={study.opportunity}
              constraint={study.constraint}
            />
          </section>

          {postcardLayout ? <PostcardSet cards={postcardsFor("context")} /> : null}
          {postcardLayout ? <PostcardSet cards={postcardsFor("problem")} /> : null}

          {postcardLayout ? (
            <>
              {challengeArts.map((art) => (
                <CaseFigure key={art.src} art={art} />
              ))}

              {study.pullQuote ? (
                <blockquote className="case-quote">
                  <p>{study.pullQuote}</p>
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

              <PostcardSet cards={postcardsFor("approach")} />

              {approachArts.map((art) => (
                <CaseFigure key={art.src} art={art} />
              ))}

              <PostcardSet cards={postcardsFor("outcome")} />

              {outcomeArts.map((art) => (
                <CaseFigure key={art.src} art={art} />
              ))}

              <section className="case-section">
                <h2>Outcomes</h2>
                <ul>
                  {study.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {galleryArts.length > 0 ? (
                <section className="case-gallery" aria-label="Project artifacts">
                  <h2 className="case-gallery__title">Artifacts</h2>
                  <div className="case-gallery__grid">
                    {galleryArts.map((art) => (
                      <CaseFigure key={art.src} art={art} gallery />
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
            </>
          ) : hasStats ? null : (
            storyAfterContext
          )}
        </article>
      </div>

      {!postcardLayout && hasStats && study.stats ? (
        <StatBlocks stats={study.stats} />
      ) : null}

      {!postcardLayout && hasStats ? (
        <div className="container">
          <article className="case-article">{storyAfterContext}</article>
        </div>
      ) : null}
    </div>
  );
}
