import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

/** Card chrome shows the opening sentence. The case page keeps the full role. */
function cardRole(role: string) {
  const sentence = role.split(/(?<=[.!?])\s/)[0];
  return sentence ?? role;
}

export function CaseCard({
  study,
  lead = false,
}: {
  study: CaseStudy;
  lead?: boolean;
}) {
  return (
    <Link href={`/work/${study.slug}`} className={lead ? "card lead" : "card"}>
      <div className="img">
        {study.thumb ? (
          <Image
            src={study.thumb}
            alt={study.thumbAlt ?? ""}
            fill
            sizes={
              lead
                ? "(max-width: 600px) 100vw, 640px"
                : "(max-width: 600px) 100vw, 50vw"
            }
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          <div className="card__placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="b">
        <p className="label muted meta">
          {study.client} · {study.dates}
        </p>
        <h3>{study.title}</h3>
        <dl>
          <dt>My role</dt>
          <dd>{cardRole(study.role)}</dd>
          <dt>Outcome</dt>
          <dd className="o">{study.proof}</dd>
        </dl>
        {study.tags.length > 0 ? (
          <p className="tags">{study.tags.join(" · ")}</p>
        ) : null}
      </div>
    </Link>
  );
}

export function CaseArchive({ studies }: { studies: CaseStudy[] }) {
  return (
    <ul>
      {studies.map((study) => (
        <li key={study.slug}>
          <Link href={`/work/${study.slug}`}>
            <div>
              <b>{study.title}</b>
              <small>{study.client}</small>
            </div>
            <span>{study.proof}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
