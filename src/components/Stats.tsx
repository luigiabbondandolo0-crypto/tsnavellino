"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1892, suffix: "", label: "Anno di fondazione", prefix: "" },
  { value: 134, suffix: "+", label: "Anni di storia", prefix: "" },
  { value: 2, suffix: "", label: "Poligoni interni", prefix: "" },
  { value: 25, suffix: "m", label: "Distanza massima", prefix: "" },
];

function useCounter(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({
  value,
  suffix,
  prefix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const count = useCounter(value, 1800, active);
  return (
    <div
      className="text-center py-8 px-4"
      style={{ animation: active ? `fadeUp 0.6s ease ${delay}ms both` : "none" }}
    >
      <div className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-[#c9a04a] mb-2">
        {prefix}
        {count.toLocaleString("it-IT")}
        {suffix}
      </div>
      <div className="text-[#555] text-xs tracking-[0.25em] uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1a1a1a]">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} active={active} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
