"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: 1892, suffix: "", label: "Anno di fondazione" },
  { value: 134, suffix: "+", label: "Anni di storia" },
  { value: 2, suffix: "", label: "Poligoni interni" },
  { value: 25, suffix: "m", label: "Distanza massima" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ value, suffix, label, active, delay }: {
  value: number; suffix: string; label: string; active: boolean; delay: number;
}) {
  const reduce = useReducedMotion();
  const count = useCounter(value, 1600, active);
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="text-center py-10 px-4"
    >
      <div
        className="text-5xl md:text-6xl font-bold text-[#0C0A09] mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {count.toLocaleString("it-IT")}{suffix}
      </div>
      <div className="text-[#A8A29E] text-[11px] tracking-[0.28em] uppercase font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E8E4DC]">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} active={active} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
