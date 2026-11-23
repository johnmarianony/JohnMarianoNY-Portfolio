import Image from "next/image";
import { Patrick_Hand } from "next/font/google";
import type { CasePostcard as CasePostcardData } from "@/content/cases";

const postcardFont = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-postcard",
});

export function CasePostcard({
  card,
  side,
  eager = false,
}: {
  card: CasePostcardData;
  side: "left" | "right";
  eager?: boolean;
}) {
  const tilt = card.tilt ?? (side === "left" ? -1.6 : 1.8);

  return (
    <figure
      className={`case-postcard case-postcard--${side} ${postcardFont.variable}`}
      style={{ ["--postcard-tilt" as string]: `${tilt}deg` }}
    >
      <Image
        src={card.src}
        alt={card.alt}
        width={card.width ?? 1280}
        height={card.height ?? 720}
        sizes="(max-width: 719px) 100vw, 38rem"
        className="case-postcard__image"
        loading={eager ? "eager" : "lazy"}
      />
      <figcaption className="case-postcard__caption">{card.caption}</figcaption>
    </figure>
  );
}
