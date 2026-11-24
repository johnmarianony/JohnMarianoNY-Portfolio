import Image from "next/image";
import type { CasePostcard as CasePostcardData } from "@/content/cases";

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
      className={`pc ${side}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="post">
        <div className="post__media">
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(max-width: 600px) 100vw, 640px"
            preload={eager}
          />
        </div>
        <figcaption>{card.caption}</figcaption>
      </div>
    </figure>
  );
}
