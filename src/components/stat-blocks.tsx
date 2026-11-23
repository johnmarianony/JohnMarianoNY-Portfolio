"use client";

import { useEffect, useRef } from "react";
import type { CaseStat } from "@/content/cases";

const DURATION_MS = 1200;
const THRESHOLD = 0.35;

function isWordSuffix(suffix: string | undefined) {
  return Boolean(suffix && /^\s*[A-Za-z]/.test(suffix));
}

export function StatBlocks({ stats }: { stats: CaseStat[] }) {
  const rootRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLElement | null)[]>([]);
  const barRefs = useRef<(HTMLElement | null)[]>([]);

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
          node.textContent = String(Math.round(stat.value * eased));
        }
        const bar = barRefs.current[index];
        if (bar && typeof stat.progress === "number") {
          bar.style.width = `${stat.progress * eased * 100}%`;
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
    <section className="stats" aria-label="Key results" ref={rootRef}>
      <div className="wrap">
        {stats.map((stat, index) => {
          const word = isWordSuffix(stat.suffix);
          return (
            <div key={`${stat.label}-${index}`} className="stat">
              <b>
                {stat.display ? (
                  stat.display
                ) : (
                  <>
                    {stat.prefix ?? ""}
                    <span
                      ref={(node) => {
                        valueRefs.current[index] = node;
                      }}
                    >
                      {stat.value}
                    </span>
                    {word ? (
                      <small>{stat.suffix?.trim()}</small>
                    ) : (
                      (stat.suffix ?? "")
                    )}
                  </>
                )}
              </b>
              <span>{stat.label}</span>
              {typeof stat.progress === "number" ? (
                <div className="bar" aria-hidden="true">
                  <i
                    ref={(node) => {
                      barRefs.current[index] = node;
                    }}
                    style={{ width: `${stat.progress * 100}%` }}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
