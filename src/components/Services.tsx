"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L25 8.5v5c0 6.4-5 12-11 13.5C7 25.5 3 20 3 13.5v-5L14 3z"
          stroke="#CA8A04"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="13" r="3" stroke="#CA8A04" strokeWidth="1.5" />
      </svg>
    ),
    tag: "Rilascio & Rinnovo",
    title: "Porto d'Armi",
    description:
      "Sessioni dedicate al rilascio e rinnovo del porto d'armi per uso sportivo e caccia. Appuntamento con i nostri istruttori certificati.",
    cta: "Prenota Sessione",
    href: "#contatti",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#CA8A04" strokeWidth="1.5" />
        <circle
          cx="14"
          cy="14"
          r="5.5"
          stroke="#CA8A04"
          strokeWidth="1"
          strokeDasharray="2.5 2"
        />
        <circle cx="14" cy="14" r="2" fill="#CA8A04" />
        <line x1="14" y1="4" x2="14" y2="7.5" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="20.5" x2="14" y2="24" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="14" x2="7.5" y2="14" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20.5" y1="14" x2="24" y2="14" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tag: "Allenamenti & Corsi",
    title: "Tiro Sportivo",
    description:
      "Sessioni individuali e corsi strutturati per tutti i livelli. Dal primo approccio alla preparazione agonistica con istruttori FITAV.",
    cta: "Scopri i Corsi",
    href: "#strutture",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="#CA8A04" strokeWidth="1.5" />
        <path d="M9 9h10M9 13h10M9 17h7" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M17 19.5l2 2 4-3.5"
          stroke="#CA8A04"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "Maneggio Armi",
    title: "Certificazioni",
    description:
      "Rilascio del certificato di maneggio armi richiesto per legge. Percorso completo teorico e pratico con esame finale certificato.",
    cta: "Inizia il Percorso",
    href: "#iscrizione",
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servizi" className="py-28 px-6 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#CA8A04] text-[11px] tracking-[0.35em] uppercase font-medium mb-4">
            Cosa offriamo
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#0C0A09] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I nostri <em className="text-[#CA8A04]">servizi</em>.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-white border border-[#E8E4DC] rounded-2xl p-7 flex flex-col shadow-sm hover:shadow-lg hover:border-[#CA8A04]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#FEF9EE] rounded-xl flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <span className="inline-block self-start bg-[#FEF9EE] text-[#CA8A04] text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5 rounded-full mb-4">
                {s.tag}
              </span>
              <h3
                className="text-[#0C0A09] text-2xl font-bold mb-3 group-hover:text-[#CA8A04] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#78716C] text-sm leading-relaxed flex-1 mb-6">
                {s.description}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 bg-[#CA8A04] text-white font-semibold tracking-wide px-6 py-3 rounded-lg text-sm hover:bg-[#92640A] transition-colors duration-200 cursor-pointer self-start"
              >
                {s.cta}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2 6.5h9M8 3l3.5 3.5L8 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
