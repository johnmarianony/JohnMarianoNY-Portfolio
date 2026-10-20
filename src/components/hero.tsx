import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
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
      </div>
      <div className="container hero__content">
        <p className="sr-only">{site.name} — platform experience strategist</p>
        <h1 className="hero__brand">{site.name}</h1>
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
        <div className="hero__proofs" aria-label="Selected proof points">
          {site.proofs.map((proof) => (
            <div key={proof.value} className="proof">
              <p className="proof__value">{proof.value}</p>
              <p className="proof__label">{proof.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
