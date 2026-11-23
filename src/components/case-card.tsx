import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

function cardBlurb(study: CaseStudy) {
  if (study.teaser) return study.teaser;
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
            fill
            sizes="(max-width: 719px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="case-card__thumb"
          />
        ) : (
          <div className="case-card__placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="case-card__body">
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__tags">
          {study.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <p className="case-card__summary">{cardBlurb(study)}</p>
        <p className="case-card__proof">{study.proof}</p>
      </div>
    </Link>
  );
}
