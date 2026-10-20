import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`case-card${study.dowAccent ? " case-card--dow" : ""}`}
    >
      {study.thumb ? (
        <div className="case-card__media">
          <Image
            src={study.thumb}
            alt={study.thumbAlt ?? ""}
            width={640}
            height={360}
            sizes="(max-width: 719px) 100vw, 50vw"
            className="case-card__thumb"
          />
        </div>
      ) : null}
      <div className="case-card__body">
        <div className="case-card__meta">
          <span>{study.client}</span>
          <span aria-hidden="true">·</span>
          <span>{study.sector}</span>
        </div>
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__proof">{study.proof}</p>
        <p className="case-card__summary">{study.summary}</p>
        <span className="case-card__cta">Read case</span>
      </div>
    </Link>
  );
}
