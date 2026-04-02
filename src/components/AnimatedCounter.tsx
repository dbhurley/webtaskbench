"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1500,
  label,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const [booted, setBooted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;

            if (decimals > 0) {
              setDisplay(current.toFixed(decimals));
            } else {
              setDisplay(Math.round(current).toLocaleString("en-US"));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setBooted(true);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div
        className={`font-mono text-4xl font-bold text-accent md:text-5xl lg:text-6xl glow-teal animate-counter ${
          booted ? "cursor-blink" : ""
        }`}
      >
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}
