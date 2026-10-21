import Image from "next/image";
import Link from "next/link";

const plates = [
  {
    src: "/images/studio/ink-mashups.jpg",
    alt: "Ink sketchbook plate — pop mashups and cross-hatched scenes",
    label: "Mashups",
  },
  {
    src: "/images/studio/ink-noir.jpg",
    alt: "Ink sketchbook plate — high-contrast noir and horror studies",
    label: "Noir",
  },
  {
    src: "/images/studio/ink-surreal.jpg",
    alt: "Ink sketchbook plate — surreal and cartoon collision studies",
    label: "Surreal",
  },
  {
    src: "/images/studio/ink-chromatic.jpg",
    alt: "Marker illustration — nocturnal party scene with warped perspective",
    label: "Chromatic",
  },
] as const;

export function StudioBand() {
  return (
    <section className="studio" aria-labelledby="studio-title">
      <div className="studio__bleed" aria-hidden="true" />
      <div className="container studio__inner">
        <div className="studio__intro">
          <p className="studio__eyebrow">Studio</p>
          <h2 id="studio-title" className="studio__title">
            Ink under the platform work
          </h2>
          <p className="studio__lede">
            Giger denseness. Escher structure. Dalí wrongness. Jones timing.
            Schulz economy. The same hand that maps federal workflows still
            fills sketchbooks—because clarity and character are both craft.
          </p>
          <p className="studio__aside">
            Hiring skim stays above the fold. This is the fingerprint.
          </p>
          <Link href="/about" className="btn btn--ink">
            About the hand
          </Link>
        </div>

        <ul className="studio__plates">
          {plates.map((plate, i) => (
            <li
              key={plate.src}
              className={`studio__plate studio__plate--${i + 1}`}
            >
              <div className="studio__frame">
                <Image
                  src={plate.src}
                  alt={plate.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 700px) 90vw, 28vw"
                  className="studio__img"
                />
              </div>
              <span className="studio__label">{plate.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
