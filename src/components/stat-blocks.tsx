"use client";

import { useEffect, useRef } from "react";
import type { CaseStat } from "@/content/cases";

const DURATION_MS = 1000;
const THRESHOLD = 0.35;

function finalLabel(stat: CaseStat) {
  if (stat.display) return stat.display;
  return `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`;
}

function countedLabel(stat: CaseStat, value: number) {
  if (stat.display) return stat.display;
  return `${stat.prefix ?? ""}${value}${stat.suffix ?? ""}`;
}

export function StatBlocks({ stats }: { stats: CaseStat[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLElement | null)[]>([]);
  const ringRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let played = false;

    const paint = (eased: number) => {
      stats.forEach((stat, index) => {
        const node = valueRefs.current[index];
        if (node && !stat.display) {
          node.textContent = countedLabel(stat, Math.round(stat.value * eased));
        }
        const ring = ringRefs.current[index];
        if (ring && typeof stat.progress === "number") {
          const circ = Number(ring.dataset.circ);
          ring.style.strokeDashoffset = String(
            circ * (1 - stat.progress * eased),
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (played || !entries.some((entry) => entry.isIntersecting)) return;
        played = true;
        observer.disconnect();
        paint(0);
        const started = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - started) / DURATION_MS);
          paint(1 - (1 - t) ** 3);
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: THRESHOLD },
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stats]);

  return (
    <section className="stat-blocks" aria-label="Key results" ref={rootRef}>
      <div className="container stat-blocks__grid">
        {stats.map((stat, index) => {
          const progress = stat.progress;
          const size = 28;
          const stroke = 2;
          const radius = (size - stroke) / 2;
          const circ = 2 * Math.PI * radius;
          return (
            <div key={stat.label} className="stat-block">
              <p className="stat-block__value">
                {typeof progress === "number" ? (
                  <svg
                    className="stat-block__ring"
                    viewBox={`0 0 ${size} ${size}`}
                    aria-hidden="true"
                  >
                    <circle
                      className="stat-block__ring-track"
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      strokeWidth={stroke}
                    />
                    <circle
                      ref={(node) => {
                        ringRefs.current[index] = node;
                      }}
                      className="stat-block__ring-value"
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      strokeWidth={stroke}
                      data-circ={circ}
                      strokeDasharray={circ}
                      strokeDashoffset={circ * (1 - progress)}
                      transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                  </svg>
                ) : null}
                <span
                  ref={(node) => {
                    valueRefs.current[index] = node;
                  }}
                >
                  {finalLabel(stat)}
                </span>
              </p>
              <p className="stat-block__label">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
