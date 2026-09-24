"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const timeline = [
  { year: "1892", text: "Fondazione della sezione di Avellino del Tiro a Segno Nazionale." },
  { year: "1900s", text: "Espansione delle strutture e crescita della comunità di tiratori irpini." },
  { year: "Oggi", text: "Due poligoni interni, corsi per principianti ed esperti, servizi porto d'armi." },
];

const photos = [
  { src: "/images/gallery-4.jpg", alt: "Team TSN Avellino a Chambéry — competizione internazionale", span: "col-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Giovani atleti TSN con medaglie", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Atleta TSN in gara", span: "col-span-1" },
  { src: "/images/gallery-1.jpg", alt: "Tiro di precisione al poligono", span: "col-span-1" },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="storia" aria-labelledby="storia-title" className="tsn-section bg-[#FAFAF9]">
      <div className="tsn-container">

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="tsn-section-label">Chi siamo</p>
          <h2 id="storia-title" className="tsn-section-title">
            134 anni di{" "}
            <em className="text-[#CA8A04]">disciplina</em>{" "}e{" "}
            <em className="text-[#CA8A04]">passione</em>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: timeline + copy */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Timeline card */}
            <div className="tsn-card relative p-7 sm:p-10 mb-8">
              <div className="absolute -top-px -left-px w-10 h-10 border-t-2 border-l-2 border-[#CA8A04] rounded-tl-2xl" />
              <div className="absolute -bottom-px -right-px w-10 h-10 border-b-2 border-r-2 border-[#CA8A04] rounded-br-2xl" />
              <p className="tsn-section-label mb-7">La nostra storia</p>
              <ol className="space-y-6" aria-label="Timeline storica">
                {timeline.map((item, i) => (
                  <motion.li
                    key={item.year}
                    initial={reduce ? {} : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                    className="flex gap-5"
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#CA8A04] ring-4 ring-[#FEF9EE] mt-0.5" />
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-[#E8E4DC] mt-2" />}
                    </div>
                    <div className="pb-4">
                      <span className="block text-[#0C0A09] text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        {item.year}
                      </span>
                      <p className="text-[#78716C] text-sm leading-relaxed max-w-none">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Copy */}
            <div className="space-y-4 text-[#57534E] leading-relaxed text-sm sm:text-base">
              <p>
                La sezione di Avellino del Tiro a Segno Nazionale nasce nel{" "}
                <strong className="text-[#0C0A09] font-semibold">1892</strong>,
                diventando uno dei punti di riferimento per gli amanti del tiro
                sportivo in tutta l&apos;Irpinia.
              </p>
              <p>
                Negli anni abbiamo accolto centinaia di soci, da principianti
                curiosi ad atleti agonisti, offrendo strutture moderne, istruttori
                qualificati e un ambiente fatto di rispetto e cordialità.
              </p>
              <p>
                Siamo sede ufficiale per il{" "}
                <strong className="text-[#0C0A09] font-semibold">
                  rilascio e rinnovo del porto d&apos;armi
                </strong>{" "}
                e per la certificazione del maneggio delle armi.
              </p>
            </div>

            <blockquote
              className="mt-8 pl-5 border-l-2 border-[#CA8A04] text-lg italic text-[#78716C]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;134 anni di storia con tanta cordialità.&rdquo;
            </blockquote>
          </motion.div>

          {/* Right: photo grid */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="grid grid-cols-3 gap-3"
            style={{ gridAutoRows: "160px" }}
          >
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                whileHover={reduce ? {} : { scale: 1.02 }}
                transition={{ duration: 0.22 }}
                className={`relative rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
