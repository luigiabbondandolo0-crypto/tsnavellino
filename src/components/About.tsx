"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const timeline = [
  { year: "1892", text: "Fondazione della sezione di Avellino del Tiro a Segno Nazionale." },
  { year: "1900s", text: "Espansione delle strutture e crescita della comunità di tiratori irpini." },
  { year: "Oggi", text: "Due poligoni interni, corsi per principianti ed esperti, servizi porto d'armi." },
];

const photos = [
  { src: "/images/gallery-4.jpg", alt: "Team TSN Avellino a Chambéry", span: "col-span-2 row-span-1" },
  { src: "/images/gallery-5.jpg", alt: "Giovani atleti con medaglie", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Atleta in gara", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-1.jpg", alt: "Tiro di precisione", span: "col-span-1 row-span-1" },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="storia" className="py-28 px-6 bg-[#FAFAF9]">
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
            Chi siamo
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#0C0A09] leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            134 anni di{" "}
            <em className="text-[#CA8A04]">disciplina</em>{" "}e{" "}
            <em className="text-[#CA8A04]">passione</em>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: timeline */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative bg-white border border-[#E8E4DC] rounded-2xl p-8 lg:p-10 shadow-sm mb-8">
              <div className="absolute -top-px -left-px w-10 h-10 border-t-2 border-l-2 border-[#CA8A04] rounded-tl-2xl" />
              <div className="absolute -bottom-px -right-px w-10 h-10 border-b-2 border-r-2 border-[#CA8A04] rounded-br-2xl" />
              <p className="text-[#CA8A04] text-[11px] tracking-[0.35em] uppercase font-medium mb-8">
                La nostra storia
              </p>
              <div className="space-y-7">
                {timeline.map((item, i) => (
                  <motion.div
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
                    <div className="pb-5">
                      <span className="block text-[#0C0A09] text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        {item.year}
                      </span>
                      <p className="text-[#78716C] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-[#57534E] leading-relaxed">
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
            className="grid grid-cols-2 grid-rows-3 gap-3 h-[520px]"
          >
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                whileHover={reduce ? {} : { scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm cursor-pointer ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
