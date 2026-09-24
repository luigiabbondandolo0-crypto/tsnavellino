"use client";

import { motion, useReducedMotion } from "framer-motion";

const facilities = [
  {
    name: "Poligono 12m",
    tag: "Poligono Corto",
    description:
      "Linea di fuoco da 12 metri ideale per pistola e introduzione al tiro. Attrezzatura moderna, illuminazione professionale e bersagli motorizzati.",
    specs: [
      { label: "Distanza", value: "12 m" },
      { label: "Postazioni", value: "Multiple" },
      { label: "Disciplina", value: "Pistola" },
    ],
  },
  {
    name: "Poligono 25m",
    tag: "Poligono Principale",
    description:
      "Poligono per il tiro di precisione. Adatto ad atleti agonisti e tiratori esperti che vogliono affinare la tecnica a distanze regolamentari.",
    specs: [
      { label: "Distanza", value: "25 m" },
      { label: "Postazioni", value: "Multiple" },
      { label: "Disciplina", value: "Precisione" },
    ],
  },
];

export default function Facilities() {
  const reduce = useReducedMotion();

  return (
    <section id="strutture" className="py-28 px-6 bg-[#FAFAF9]">
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
            Le nostre strutture
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#0C0A09] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Due poligoni,{" "}
            <em className="text-[#CA8A04]">un&apos;unica</em> eccellenza.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.name}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="group bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#CA8A04]/30 transition-all duration-300"
            >
              {/* Visual placeholder */}
              <div className="w-full h-52 bg-[#F5F3EF] flex items-center justify-center border-b border-[#E8E4DC]">
                <div className="flex flex-col items-center gap-3 opacity-30">
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="20" stroke="#CA8A04" strokeWidth="1.2" />
                    <circle
                      cx="26"
                      cy="26"
                      r="12"
                      stroke="#CA8A04"
                      strokeWidth="1.2"
                      strokeDasharray="3 2.5"
                    />
                    <circle cx="26" cy="26" r="5" stroke="#CA8A04" strokeWidth="1.2" />
                    <circle cx="26" cy="26" r="1.5" fill="#CA8A04" />
                  </svg>
                  <span className="text-[#78716C] text-[10px] tracking-widest uppercase">
                    Foto in arrivo
                  </span>
                </div>
              </div>

              <div className="p-7">
                <span className="inline-block bg-[#FEF9EE] text-[#CA8A04] text-[10px] tracking-[0.25em] uppercase font-semibold px-3 py-1.5 rounded-full mb-5">
                  {f.tag}
                </span>
                <h3
                  className="text-[#0C0A09] text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </h3>
                <p className="text-[#78716C] text-sm leading-relaxed mb-7">
                  {f.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E8E4DC]">
                  {f.specs.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <div
                        className="text-[#0C0A09] text-lg font-bold mb-0.5"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {spec.value}
                      </div>
                      <div className="text-[#A8A29E] text-[10px] tracking-[0.2em] uppercase">
                        {spec.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Address bar */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-6 bg-white border border-[#E8E4DC] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#FEF9EE] rounded-lg flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z"
                  stroke="#CA8A04"
                  strokeWidth="1.2"
                />
                <circle cx="7" cy="5" r="1.5" stroke="#CA8A04" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="text-[#44403C] text-sm">Via F. Tedesco 203, Avellino (AV)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-px h-6 bg-[#E8E4DC]" />
            <div className="w-9 h-9 bg-[#FEF9EE] rounded-lg flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2.5c0-.3.2-.5.5-.5h2l1 3-1.5 1.5a9 9 0 004 4l1.5-1.5 3 1v2c0 .3-.2.5-.5.5C5.6 12.5 1.5 8.4 2 2.5z"
                  stroke="#CA8A04"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <a
              href="tel:082574254"
              className="text-[#44403C] text-sm hover:text-[#CA8A04] transition-colors cursor-pointer"
            >
              0825 74254
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
