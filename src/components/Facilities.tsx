"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const facilities = [
  {
    name: "Poligono 12m",
    tag: "Poligono Corto",
    description: "Linea di fuoco da 12 metri ideale per pistola e introduzione al tiro. Attrezzatura moderna, illuminazione professionale e bersagli motorizzati.",
    specs: [
      { label: "Distanza", value: "12 m" },
      { label: "Postazioni", value: "Multiple" },
      { label: "Disciplina", value: "Pistola" },
    ],
    image: "/images/poligono-2.jpg",
  },
  {
    name: "Poligono 25m",
    tag: "Poligono Principale",
    description: "Poligono per il tiro di precisione. Adatto ad atleti agonisti e tiratori esperti che vogliono affinare la tecnica a distanze regolamentari.",
    specs: [
      { label: "Distanza", value: "25 m" },
      { label: "Postazioni", value: "Multiple" },
      { label: "Disciplina", value: "Precisione" },
    ],
    image: "/images/poligono-1.jpg",
  },
];

const galleryPhotos = [
  { src: "/images/poligono-3.jpg", alt: "Tiro pistola al poligono" },
  { src: "/images/poligono-4.jpg", alt: "Sessione allenamento" },
  { src: "/images/gallery-6.jpg", alt: "Atleta in gara" },
  { src: "/images/gallery-3.jpg", alt: "Team TSN Avellino" },
];

export default function Facilities() {
  const reduce = useReducedMotion();

  return (
    <section id="strutture" aria-labelledby="strutture-title" className="tsn-section bg-[#FAFAF9] content-auto">
      <div className="tsn-container">

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="tsn-section-label">Le nostre strutture</p>
          <h2 id="strutture-title" className="tsn-section-title">
            Due poligoni,{" "}
            <em className="text-[#CA8A04]">un&apos;unica</em> eccellenza.
          </h2>
        </motion.div>

        {/* Main cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {facilities.map((f, i) => (
            <motion.article
              key={f.name}
              initial={reduce ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={reduce ? {} : { y: -5 }}
              className="tsn-card overflow-hidden gpu"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={f.image}
                  alt={`${f.name} — TSN Avellino`}
                  fill
                  priority={i === 0}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="tsn-badge absolute top-4 left-4 !bg-white/90 backdrop-blur-sm">
                  {f.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3
                  className="text-[#0C0A09] text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </h3>
                <p className="text-[#78716C] text-sm leading-relaxed mb-7 max-w-none">
                  {f.description}
                </p>

                <dl className="grid grid-cols-3 gap-3 pt-5 border-t border-[#E8E4DC]">
                  {f.specs.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <dt className="text-[#A8A29E] text-[10px] tracking-[0.2em] uppercase mb-1">{spec.label}</dt>
                      <dd
                        className="text-[#0C0A09] text-xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Photo gallery strip */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          aria-label="Galleria fotografica poligoni"
        >
          {galleryPhotos.map((img, i) => (
            <motion.div
              key={i}
              whileHover={reduce ? {} : { scale: 1.03 }}
              transition={{ duration: 0.22 }}
              className="relative h-32 rounded-xl overflow-hidden border border-[#E8E4DC] cursor-pointer gpu"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Address bar */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="tsn-card mt-4 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FEF9EE] rounded-lg flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" stroke="#CA8A04" strokeWidth="1.2" />
                <circle cx="7" cy="5" r="1.5" stroke="#CA8A04" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="text-[#44403C] text-sm">Via F. Tedesco 203, Avellino (AV)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-px h-6 bg-[#E8E4DC]" />
            <div className="w-9 h-9 bg-[#FEF9EE] rounded-lg flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 2.5c0-.3.2-.5.5-.5h2l1 3-1.5 1.5a9 9 0 004 4l1.5-1.5 3 1v2c0 .3-.2.5-.5.5C5.6 12.5 1.5 8.4 2 2.5z" stroke="#CA8A04" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
            <a href="tel:082574254" className="text-[#44403C] text-sm hover:text-[#CA8A04] transition-colors">
              0825 74254
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
