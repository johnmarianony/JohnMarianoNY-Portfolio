import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

function cardBlurb(study: CaseStudy) {
  if (study.teaser) return study.teaser;
  // Fallback: first sentence of summary
  const cut = study.summary.split(/(?<=\.)\s/)[0];
  return cut ?? study.summary;
}

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`case-card${study.dowAccent ? " case-card--dow" : ""}`}
    >
      <div className="case-card__media">
        {study.thumb ? (
          <Image
            src={study.thumb}
            alt={study.thumbAlt ?? ""}
            width={720}
            height={480}
            sizes="(max-width: 719px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="case-card__thumb"
          />
        ) : (
          <div className="case-card__placeholder" aria-hidden="true" />
        )}
        <span className="case-card__proof-chip">{study.proof}</span>
      </div>
      <div className="case-card__body">
        <div className="case-card__meta">
          <span>{study.client}</span>
        </div>
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__summary">{cardBlurb(study)}</p>
      </div>
    </Link>
  );
}
