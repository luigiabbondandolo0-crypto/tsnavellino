"use client";

import { useRef, useEffect, useState } from "react";

const facilities = [
  {
    name: "Poligono 12m",
    description:
      "Linea di fuoco da 12 metri ideale per pistola e introduzione al tiro. Attrezzatura moderna, illuminazione professionale e bersagli motorizzati.",
    specs: [
      { label: "Distanza", value: "12 metri" },
      { label: "Postazioni", value: "Multiple" },
      { label: "Disciplina", value: "Pistola" },
    ],
    tag: "Poligono Corto",
  },
  {
    name: "Poligono 25m",
    description:
      "Il poligono principale per il tiro di precisione. Adatto ad atleti agonisti e tiratori esperti che vogliono affinare la tecnica a distanze regolamentari.",
    specs: [
      { label: "Distanza", value: "25 metri" },
      { label: "Postazioni", value: "Multiple" },
      { label: "Disciplina", value: "Pistola / Precisione" },
    ],
    tag: "Poligono Principale",
  },
];

export default function Facilities() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="strutture" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-20"
          style={{ animation: visible ? "fadeUp 0.7s ease 0.1s both" : "none" }}
        >
          <p className="text-[#c9a04a] text-xs tracking-[0.4em] uppercase mb-4">
            Le nostre strutture
          </p>
          <h2 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-[#f0ece4] leading-tight">
            Due poligoni,{" "}
            <span className="text-[#c9a04a] italic">un&apos;unica</span>{" "}
            eccellenza.
          </h2>
        </div>

        {/* Facility cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((f, i) => (
            <div
              key={f.name}
              className="relative border border-[#1f1f1f] p-10 group hover:border-[#c9a04a]/30 transition-colors duration-500"
              style={{
                animation: visible ? `fadeUp 0.8s ease ${0.2 + i * 0.2}s both` : "none",
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c9a04a]/0 group-hover:border-[#c9a04a] transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c9a04a]/0 group-hover:border-[#c9a04a] transition-colors duration-500" />

              {/* Tag */}
              <div className="inline-block border border-[#222] text-[#555] text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 mb-8">
                {f.tag}
              </div>

              {/* Visual placeholder */}
              <div className="w-full h-48 bg-[#0f0f0f] border border-[#1a1a1a] flex items-center justify-center mb-8 overflow-hidden">
                <div className="flex flex-col items-center gap-4 opacity-30">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" stroke="#c9a04a" strokeWidth="1" />
                    <circle cx="24" cy="24" r="10" stroke="#c9a04a" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="24" cy="24" r="4" stroke="#c9a04a" strokeWidth="1" />
                    <circle cx="24" cy="24" r="1.5" fill="#c9a04a" />
                  </svg>
                  <span className="text-[#444] text-xs tracking-widest uppercase">
                    Foto in arrivo
                  </span>
                </div>
              </div>

              <h3 className="font-['var(--font-playfair)'] text-2xl font-bold text-[#f0ece4] mb-4">
                {f.name}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-8">
                {f.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#1a1a1a]">
                {f.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-[#c9a04a] text-sm font-semibold mb-1">
                      {spec.value}
                    </div>
                    <div className="text-[#444] text-[10px] tracking-[0.2em] uppercase">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Address banner */}
        <div
          className="mt-8 border border-[#1a1a1a] bg-[#0a0a0a] p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            animation: visible ? "fadeUp 0.7s ease 0.7s both" : "none",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#222] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z"
                  stroke="#c9a04a"
                  strokeWidth="1.2"
                />
                <circle cx="7" cy="5" r="1.5" stroke="#c9a04a" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="text-[#666] text-sm">
              Via F. Tedesco 203, Avellino (AV)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-px h-8 bg-[#1a1a1a] hidden md:block" />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2.5c0-.3.2-.5.5-.5h2l1 3-1.5 1.5a9 9 0 004 4l1.5-1.5 3 1v2c0 .3-.2.5-.5.5C5.6 12.5 1.5 8.4 2 2.5z"
                stroke="#c9a04a"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href="tel:082574254"
              className="text-[#666] text-sm hover:text-[#c9a04a] transition-colors"
            >
              0825 74254
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
