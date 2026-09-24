"use client";

import { motion, useReducedMotion } from "framer-motion";

const timeline = [
  {
    year: "1892",
    text: "Fondazione della sezione di Avellino del Tiro a Segno Nazionale.",
  },
  {
    year: "1900s",
    text: "Espansione delle strutture e crescita della comunità di tiratori irpini.",
  },
  {
    year: "Oggi",
    text: "Due poligoni interni, corsi per principianti ed esperti, servizi porto d'armi.",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="storia" className="py-28 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left: timeline card */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative bg-white border border-[#E8E4DC] rounded-2xl p-8 lg:p-10 shadow-sm">
            {/* Corner accents */}
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
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[#E8E4DC] mt-2" />
                    )}
                  </div>
                  <div className="pb-5">
                    <span
                      className="block text-[#0C0A09] text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.year}
                    </span>
                    <p className="text-[#78716C] text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="pt-4"
        >
          <p className="text-[#CA8A04] text-[11px] tracking-[0.35em] uppercase font-medium mb-4">
            Chi siamo
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#0C0A09] leading-[1.05] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            134 anni di{" "}
            <em className="text-[#CA8A04]">disciplina</em>
            {" "}e{" "}
            <em className="text-[#CA8A04]">passione</em>.
          </h2>

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

      </div>
    </section>
  );
}
