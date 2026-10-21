import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

export function FeaturedCase({ study }: { study: CaseStudy }) {
  const tags = [study.client, study.sector, ...study.tags.slice(0, 2)];

  return (
    <article
      className={`featured-case${study.dowAccent ? " featured-case--dow" : ""}`}
    >
      <Link href={`/work/${study.slug}`} className="featured-case__media">
        {study.thumb ? (
          <Image
            src={study.thumb}
            alt={study.thumbAlt ?? ""}
            width={1400}
            height={788}
            sizes="(max-width: 900px) 100vw, 1120px"
            className="featured-case__img"
            priority
          />
        ) : (
          <div className="featured-case__placeholder" aria-hidden="true" />
        )}
      </Link>

      <div className="featured-case__copy">
        <p className="featured-case__eyebrow">Featured case</p>
        <h3 className="featured-case__title">
          <Link href={`/work/${study.slug}`}>{study.title}</Link>
        </h3>
        <p className="featured-case__tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <p className="featured-case__body">
          {study.teaser ?? study.summary}
        </p>
        <p className="featured-case__proof">{study.proof}</p>
        <Link href={`/work/${study.slug}`} className="btn btn--primary">
          View case
        </Link>
      </div>
    </article>
  );
}
