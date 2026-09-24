"use client";

import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10v6c0 7-5.6 13.5-12 15C9.6 29.5 4 23 4 16v-6L16 4z" stroke="#c9a04a" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="3" stroke="#c9a04a" strokeWidth="1.5" />
      </svg>
    ),
    title: "Porto d'Armi",
    subtitle: "Rilascio & Rinnovo",
    description:
      "Sessioni dedicate al rilascio e rinnovo del porto d'armi per uso sportivo e caccia. Prenota il tuo appuntamento con i nostri istruttori certificati.",
    cta: "Prenota Sessione",
    href: "#contatti",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#c9a04a" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="6" stroke="#c9a04a" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="16" cy="16" r="2" fill="#c9a04a" />
        <line x1="16" y1="5" x2="16" y2="8" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="27" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="16" x2="8" y2="16" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="16" x2="27" y2="16" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Tiro Sportivo",
    subtitle: "Allenamenti & Corsi",
    description:
      "Sessioni di allenamento individuali e corsi strutturati per tutti i livelli. Dal primo approccio alla preparazione agonistica, con istruttori FITAV.",
    cta: "Scopri i Corsi",
    href: "#strutture",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#c9a04a" strokeWidth="1.5" />
        <path d="M10 10h12M10 14h12M10 18h8" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 21l2 2 4-4" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certificazioni",
    subtitle: "Maneggio Armi",
    description:
      "Rilascio del certificato di maneggio delle armi richiesto per legge. Percorso completo teorico e pratico con esame finale certificato.",
    cta: "Inizia il Percorso",
    href: "#iscrizione",
  },
];

export default function Services() {
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
    <section id="servizi" ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-20"
          style={{ animation: visible ? "fadeUp 0.7s ease 0.1s both" : "none" }}
        >
          <p className="text-[#c9a04a] text-xs tracking-[0.4em] uppercase mb-4">
            Cosa offriamo
          </p>
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-[#f0ece4] leading-tight">
              I nostri <span className="text-[#c9a04a] italic">servizi</span>.
            </h2>
            <div className="hidden md:block w-32 h-px bg-gradient-to-r from-[#c9a04a]/40 to-transparent" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-[#0a0a0a] p-8 md:p-10 group hover:bg-[#0f0f0f] transition-colors duration-500 flex flex-col"
              style={{
                animation: visible ? `fadeUp 0.7s ease ${0.2 + i * 0.15}s both` : "none",
              }}
            >
              <div className="mb-8">{s.icon}</div>
              <div className="text-[#444] text-xs tracking-[0.3em] uppercase mb-2">
                {s.subtitle}
              </div>
              <h3 className="font-['var(--font-playfair)'] text-2xl font-bold text-[#f0ece4] mb-4 group-hover:text-[#c9a04a] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed flex-1 mb-8">
                {s.description}
              </p>
              <a
                href={s.href}
                className="flex items-center gap-2 text-[#c9a04a] text-xs tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-300"
              >
                {s.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
