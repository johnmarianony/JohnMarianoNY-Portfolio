import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

function Headline({ text }: { text: string }) {
  const phrase = "clarity to complexity";
  const index = text.toLowerCase().indexOf(phrase);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <em>{text.slice(index, index + phrase.length)}</em>
      {text.slice(index + phrase.length)}
    </>
  );
}

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <p className="label">{site.eyebrow}</p>
            <h1 className="serif">
              <Headline text={site.headline} />
            </h1>
            <p className="pos">{site.positioning}</p>
            <p className="lead-line">{site.leadLine}</p>
            <div className="btns">
              <Link href={site.cta.primary.href} className="btn primary">
                {site.cta.primary.label}
              </Link>
              <Link href={site.cta.secondary.href} className="btn ghost">
                {site.cta.secondary.label}
              </Link>
            </div>
          </div>
          <figure className="post">
            <div className="frame">
              <Image
                src="/images/hero/john-hero-figure.png"
                alt="Ink-and-marker caricature of John Mariano"
                fill
                sizes="(max-width: 600px) 80vw, 380px"
                style={{ objectFit: "cover", objectPosition: "top" }}
                preload
              />
            </div>
            <figcaption>{site.support}</figcaption>
          </figure>
        </div>
      </section>
      <section className="band" aria-label="Selected proof points">
        <div className="wrap">
          {site.proofs.map((proof, index) => (
            <div key={proof.value} className="proof">
              <span className="n">{String(index + 1).padStart(2, "0")}</span>
              <b>{proof.value}</b>
              <span className="proof__label">{proof.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
