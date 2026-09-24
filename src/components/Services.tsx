"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L25 8.5v5c0 6.4-5 12-11 13.5C7 25.5 3 20 3 13.5v-5L14 3z" stroke="#CA8A04" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="13" r="3" stroke="#CA8A04" strokeWidth="1.5" />
      </svg>
    ),
    tag: "Rilascio & Rinnovo",
    title: "Porto d'Armi",
    description: "Sessioni dedicate al rilascio e rinnovo del porto d'armi per uso sportivo e caccia. Appuntamento con i nostri istruttori certificati.",
    cta: "Prenota Sessione",
    href: "#contatti",
    image: "/images/gallery-6.jpg",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#CA8A04" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="5.5" stroke="#CA8A04" strokeWidth="1" strokeDasharray="2.5 2" />
        <circle cx="14" cy="14" r="2" fill="#CA8A04" />
        <line x1="14" y1="4" x2="14" y2="7.5" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="20.5" x2="14" y2="24" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="14" x2="7.5" y2="14" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20.5" y1="14" x2="24" y2="14" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tag: "Allenamenti & Corsi",
    title: "Tiro Sportivo",
    description: "Sessioni individuali e corsi strutturati per tutti i livelli. Dal primo approccio alla preparazione agonistica con istruttori FITAV.",
    cta: "Scopri i Corsi",
    href: "#strutture",
    image: "/images/poligono-3.jpg",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="18" height="22" rx="2" stroke="#CA8A04" strokeWidth="1.5" />
        <path d="M9 9h10M9 13h10M9 17h7" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 19.5l2 2 4-3.5" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Maneggio Armi",
    title: "Certificazioni",
    description: "Rilascio del certificato di maneggio armi richiesto per legge. Percorso completo teorico e pratico con esame finale certificato.",
    cta: "Inizia il Percorso",
    href: "#iscrizione",
    image: "/images/gallery-1.jpg",
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servizi" aria-labelledby="servizi-title" className="tsn-section bg-[#F5F3EF] content-auto">
      <div className="tsn-container">

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="tsn-section-label">Cosa offriamo</p>
          <h2 id="servizi-title" className="tsn-section-title">
            I nostri <em className="text-[#CA8A04]">servizi</em>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={reduce ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={reduce ? {} : { y: -6 }}
              className="tsn-card overflow-hidden flex flex-col gpu"
            >
              {/* Photo */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={`${s.title} — TSN Avellino`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                  {s.icon}
                </div>
                <span className="tsn-badge absolute bottom-4 left-4 !bg-[#CA8A04] !text-white !text-[9px]">
                  {s.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3
                  className="text-[#0C0A09] text-xl sm:text-2xl font-bold mb-3 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#78716C] text-sm leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[#CA8A04] font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  {s.cta}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
