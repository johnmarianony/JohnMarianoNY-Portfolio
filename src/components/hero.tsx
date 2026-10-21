import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero hero--splash">
      <div className="hero__plane" aria-hidden="true">
        <Image
          src="/images/hero/platform-atmosphere.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
        <div className="hero__scrim" />
        <div className="hero__ink" />
      </div>

      <div className="container hero__content">
        <div className="hero__masthead">
          <div className="hero__splash-panel">
            <p className="sr-only">{site.name} — platform experience strategist</p>
            <p className="hero__panel-kicker" aria-hidden="true">
              Issue · Cover · 01
            </p>
            <h1 className="hero__brand">
              <span className="hero__brand-mark" aria-hidden="true" />
              <span className="hero__brand-line">John</span>
              <span className="hero__brand-line hero__brand-line--name">
                Mariano
              </span>
            </h1>
            <p className="hero__headline">{site.headline}</p>
            <p className="hero__support">{site.support}</p>
            <div className="hero__actions">
              <Link href={site.cta.primary.href} className="btn btn--primary">
                {site.cta.primary.label}
              </Link>
              <Link href={site.cta.secondary.href} className="btn btn--ghost">
                {site.cta.secondary.label}
              </Link>
            </div>
          </div>

          <figure className="hero__figure">
            <Image
                src="/images/hero/john-ink-marker-preferred.png"
                alt="Ink-and-marker caricature of John Mariano with solid white sclera"
              width={720}
              height={960}
              sizes="(max-width: 900px) 55vw, min(38vw, 420px)"
              className="hero__figure-img"
              priority
            />
          </figure>
        </div>

        <div className="hero__proofs" aria-label="Selected proof points">
          {site.proofs.map((proof, i) => (
            <div key={proof.value} className="proof proof--panel">
              <p className="proof__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="proof__value">{proof.value}</p>
              <p className="proof__label">{proof.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
