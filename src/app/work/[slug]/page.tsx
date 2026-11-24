import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CasePostcard } from "@/components/case-postcard";
import { StatBlocks } from "@/components/stat-blocks";
import {
  getAllCases,
  getCaseBySlug,
  getCaseNeighbors,
  processSteps,
  type CaseArtifact,
  type CasePostcard as CasePostcardData,
} from "@/content/cases";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

function paragraphs(copy: string) {
  return copy
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

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
    <div className="beats">
      {beats.map((beat, index) => (
        <div key={beat.label} className="beat">
          <h3>
            <em>{String(index + 1).padStart(2, "0")}</em>
            {beat.label}
          </h3>
          {paragraphs(beat.copy).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

function CaseFigure({
  art,
  layout,
}: {
  art: CaseArtifact;
  layout: "wall" | "stack" | "gallery";
}) {
  if (layout === "gallery") {
    return (
      <figure>
        <div className="frame">
          <Image
            src={art.src}
            alt={art.alt}
            width={art.width ?? (art.portrait ? 820 : 1600)}
            height={art.height ?? (art.portrait ? 1100 : 1000)}
            sizes="(max-width: 600px) 100vw, 640px"
            className="shot"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <figcaption>{art.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className={layout === "wall" ? "fig wall" : "fig"}>
      <div className="frame">
        <Image
          src={art.src}
          alt={art.alt}
          width={art.width ?? (art.portrait ? 820 : 1600)}
          height={art.height ?? (art.portrait ? 1100 : 1000)}
          sizes="(max-width: 600px) 100vw, 960px"
          className="shot"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <figcaption>{art.caption}</figcaption>
    </figure>
  );
}

function PostcardRun({
  cards,
  pair = false,
  eagerFirst = false,
}: {
  cards: CasePostcardData[];
  pair?: boolean;
  eagerFirst?: boolean;
}) {
  if (cards.length === 0) return null;

  if (!pair) {
    return cards.map((card, index) => (
      <CasePostcard
        key={card.src}
        card={card}
        side={index % 2 === 0 ? "left" : "right"}
        eager={eagerFirst && index === 0}
      />
    ));
  }

  const nodes = [];
  for (let index = 0; index < cards.length; index += 2) {
    const left = cards[index];
    const right = cards[index + 1];
    if (!left) continue;
    if (!right) {
      nodes.push(
        <CasePostcard
          key={left.src}
          card={left}
          side={index % 2 === 0 ? "left" : "right"}
        />,
      );
      continue;
    }
    nodes.push(
      <div className="pc-pair" key={left.src}>
        <CasePostcard card={left} side="left" eager={eagerFirst && index === 0} />
        <CasePostcard card={right} side="right" />
      </div>,
    );
  }
  return nodes;
}

export function generateStaticParams() {
  return getAllCases().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseBySlug(slug);
  if (!study) return { title: "Case study" };
  const hero = study.artifacts?.[0];
  const share = hero?.src ?? study.posterThumb ?? study.thumb;
  const path = `/work/${study.slug}`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: path,
      ...(share
        ? {
            images: [
              {
                url: share,
                alt: hero?.alt ?? study.thumbAlt ?? study.title,
                width: hero?.width ?? 1600,
                height: hero?.height ?? 1100,
              },
            ],
          }
        : {}),
    },
    ...(share
      ? {
          twitter: {
            card: "summary_large_image" as const,
            title: study.title,
            description: study.summary,
            images: [share],
          },
        }
      : {}),
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseBySlug(slug);
  if (!study) notFound();

  const artifacts = study.artifacts ?? [];
  const postcards = study.postcards ?? [];
  const postcardLayout = postcards.some((card) => card.anchor === "outcome");
  const storyArtifacts = artifacts.filter((_, index) => postcardLayout || index > 0);
  const hero = postcardLayout ? undefined : artifacts[0];
  const challengeArts = storyArtifacts.filter((art) => art.slot === "challenge");
  const approachArts = storyArtifacts.filter((art) => art.slot === "approach");
  const outcomeArts = storyArtifacts.filter((art) => art.slot === "outcome");
  const galleryArts = storyArtifacts.filter(
    (art) => art.slot !== "challenge" && art.slot !== "approach" && art.slot !== "outcome",
  );
  const forAnchor = (anchor: CasePostcardData["anchor"]) =>
    postcards.filter((card) => card.anchor === anchor);
  const showContext =
    study.context.trim().length > 0 && study.context.trim() !== study.summary.trim();
  const shortTitle = study.title.split(":")[0]?.trim() || study.title;
  const { previous, next } = getCaseNeighbors(study.slug);
  const hasStats = Boolean(study.stats?.length);
  const metrics = hasStats ? [] : (study.metrics ?? []);

  return (
    <div className="case-page">
      <header className="chead">
        <div className="wrap">
          <p className="crumb">
            <Link href="/work">Work</Link>
            {" / "}
            {study.client}
            {" / "}
            <b>{shortTitle}</b>
          </p>
          <p className="label">
            {study.client} · {study.sector}
          </p>
          <h1 className="serif">{study.title}</h1>
          {study.tags.length > 0 ? (
            <div className="chips">
              {study.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <p className="hook">{study.summary}</p>
          <div className="facts">
            <div>
              <p className="label">My role</p>
              <p>{study.role}</p>
            </div>
            <div>
              <p className="label">Outcome</p>
              <p>{study.proof}</p>
            </div>
            <div>
              <p className="label">Duration · Platform</p>
              <p className="m">
                {study.dates}
                {study.platforms.length > 0 ? (
                  <>
                    <br />
                    {study.platforms.join(" · ")}
                  </>
                ) : null}
                {study.clearance === "sterilized" ? (
                  <>
                    <br />
                    Public details sterilized for clearance
                  </>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </header>

      {hasStats && study.stats ? <StatBlocks stats={study.stats} /> : null}

      {metrics.length > 0 ? (
        <section className="stats" aria-label="Key metrics">
          <div className="wrap">
            {metrics.map((metric) => (
              <div key={metric.value + metric.label} className="stat">
                <b>{metric.value}</b>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="wrap">
        <section className="moved" aria-label="How the work moved">
          <p className="label">How it moved</p>
          {processSteps.map((step, index) => (
            <div key={step.label} className="step">
              <em>{String(index + 1).padStart(2, "0")}</em>
              <div>
                <b>{step.label}</b>
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </section>

        <article className="article">
          <section>
            <div className="col">
              <h2>Context</h2>
              {showContext
                ? paragraphs(study.context).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))
                : null}
            </div>
            <CaseBeats
              problem={study.problem}
              opportunity={study.opportunity}
              constraint={study.constraint}
            />
          </section>

          <PostcardRun cards={forAnchor("context")} eagerFirst />
          <PostcardRun cards={forAnchor("problem")} eagerFirst={forAnchor("context").length === 0} />

          {hero ? <CaseFigure art={hero} layout="stack" /> : null}
          {challengeArts.map((art) => (
            <CaseFigure key={art.src} art={art} layout="wall" />
          ))}

          {study.pullQuote ? (
            <blockquote className="quote">
              <p>{study.pullQuote}</p>
            </blockquote>
          ) : null}

          <section className="col">
            <h2>Approach</h2>
            <ol className="list">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <PostcardRun cards={forAnchor("approach")} pair />
          {approachArts.map((art) => (
            <CaseFigure key={art.src} art={art} layout="stack" />
          ))}

          <PostcardRun cards={forAnchor("outcome")} />
          {outcomeArts.map((art) => (
            <CaseFigure key={art.src} art={art} layout="stack" />
          ))}

          <section className="col">
            <h2>Outcomes</h2>
            <ul className="list ticks">
              {study.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {galleryArts.length > 0 ? (
            <>
              <div className="col gallery-head">
                <h2>Artifacts</h2>
              </div>
              <section
                className={`gallery${galleryArts.length === 1 ? " gallery--single" : ""}`}
                aria-label="Project artifacts"
              >
                {galleryArts.map((art) => (
                  <CaseFigure key={art.src} art={art} layout="gallery" />
                ))}
              </section>
            </>
          ) : null}

          <section className="col">
            <h2>Reflection</h2>
            {paragraphs(study.reflection).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </article>

        <section className="next-block">
          <div className="ask">
            <div>
              <p className="label">Next</p>
              <p>
                Want the deeper walkthrough or related artifacts? Email{" "}
                <a className="link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                or{" "}
                <Link className="link" href="/contact">
                  use the contact page
                </Link>
                .
              </p>
            </div>
            <Link href="/work" className="btn ghost">
              ← All work
            </Link>
          </div>

          {previous || next ? (
            <nav className="nc" aria-label="More case studies">
              {previous ? (
                <Link href={`/work/${previous.slug}`}>
                  {previous.thumb ? (
                    <span className="nc__media">
                      <Image
                        src={previous.thumb}
                        alt=""
                        fill
                        sizes="200px"
                      />
                    </span>
                  ) : null}
                  <div>
                    <p className="label muted">← Previous</p>
                    <h3>{previous.title}</h3>
                    <span>{previous.proof}</span>
                  </div>
                </Link>
              ) : (
                <span className="nc__spacer" />
              )}
              {next ? (
                <Link href={`/work/${next.slug}`} className="r">
                  <div>
                    <p className="label muted">Next →</p>
                    <h3>{next.title}</h3>
                    <span>{next.proof}</span>
                  </div>
                  {next.thumb ? (
                    <span className="nc__media">
                      <Image src={next.thumb} alt="" fill sizes="200px" />
                    </span>
                  ) : null}
                </Link>
              ) : null}
            </nav>
          ) : null}
        </section>
      </div>
    </div>
  );
}
