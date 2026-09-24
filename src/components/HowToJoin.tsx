"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Visita Medica",
    desc: "Effettua la visita medica presso un medico sportivo o il tuo medico di base e richiedi il certificato di idoneità fisica.",
  },
  {
    n: "02",
    title: "Documenti",
    desc: "Prepara: documento d'identità valido, codice fiscale, certificato medico e 2 foto tessera.",
  },
  {
    n: "03",
    title: "Pre-Iscrizione",
    desc: "Compila il modulo online o vieni in sede. Ti contatteremo per fissare l'appuntamento.",
  },
  {
    n: "04",
    title: "Benvenuto al TSN",
    desc: "Sei ufficialmente socio. Accedi ai poligoni, corsi e a tutti i servizi della struttura.",
  },
];

const downloads = [
  { label: "Modulo Domanda di Ammissione", href: "#" },
  { label: "Certificato Medico (Fac-Simile)", href: "#" },
  { label: "Modulo Rinnovo Porto d'Armi", href: "#" },
];

export default function HowToJoin() {
  const reduce = useReducedMotion();

  return (
    <section id="iscrizione" className="py-28 px-6 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">

        {/* Steps */}
        <div>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-[#CA8A04] text-[11px] tracking-[0.35em] uppercase font-medium mb-4">
              Come iscriversi
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold text-[#0C0A09] leading-tight mb-14"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Inizia il tuo percorso{" "}
              <em className="text-[#CA8A04]">in 4 passi</em>.
            </h2>
          </motion.div>

          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={reduce ? {} : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-5"
              >
                <div
                  className="shrink-0 w-11 h-11 bg-white border border-[#E8E4DC] rounded-xl flex items-center justify-center text-[#CA8A04] text-sm font-bold shadow-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.n}
                </div>
                <div className="pt-2">
                  <h3 className="text-[#0C0A09] font-semibold text-sm mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-[#78716C] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Downloads + CTA */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          {/* Download card */}
          <div className="bg-white border border-[#E8E4DC] rounded-2xl p-7 shadow-sm">
            <p className="text-[#A8A29E] text-[10px] tracking-[0.3em] uppercase font-medium mb-5">
              Modulistica
            </p>
            <div className="divide-y divide-[#F5F3EF]">
              {downloads.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="flex items-center justify-between gap-4 py-3.5 group cursor-pointer"
                >
                  <span className="text-[#44403C] text-sm group-hover:text-[#CA8A04] transition-colors">
                    {d.label}
                  </span>
                  <div className="w-7 h-7 bg-[#F5F3EF] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#FEF9EE] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v7M3 5.5l3 3 3-3M1 10h10"
                        stroke="#CA8A04"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA gold card */}
          <div className="bg-[#CA8A04] rounded-2xl p-7">
            <h3
              className="text-white text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pronto a iniziare?
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Compila la pre-iscrizione online o vieni a trovarci.
              Siamo aperti su appuntamento.
            </p>
            <Link
              href="#contatti"
              className="inline-flex items-center gap-2 bg-white text-[#CA8A04] font-bold tracking-wide px-6 py-3.5 rounded-lg text-sm hover:bg-[#FEF9EE] transition-colors cursor-pointer"
            >
              Contattaci
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
