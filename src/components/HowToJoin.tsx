"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RainbowButton, DownloadButton } from "@/components/ui/rainbow-button";

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
  { label: "Modulo Domanda di Ammissione", href: "/docs/modulo-tsn.pdf" },
  { label: "Certificato Medico (Fac-Simile)", href: "/docs/certificato-medico.pdf" },
  { label: "Modulo Rinnovo Porto d'Armi", href: "/docs/modulo-porto-darmi.pdf" },
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

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={reduce ? {} : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-5 group"
              >
                <div
                  className="shrink-0 w-12 h-12 bg-white border border-[#E8E4DC] rounded-xl flex items-center justify-center text-[#CA8A04] text-sm font-bold shadow-sm group-hover:border-[#CA8A04] group-hover:bg-[#FEF9EE] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.n}
                </div>
                <div className="pt-2.5">
                  <h3 className="text-[#0C0A09] font-semibold text-sm mb-1.5">{s.title}</h3>
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
            <div className="flex flex-col gap-3">
              {downloads.map((d) => (
                <DownloadButton key={d.label} href={d.href}>
                  {d.label}
                </DownloadButton>
              ))}
            </div>
          </div>

          {/* CTA gold card */}
          <div className="bg-[#CA8A04] rounded-2xl p-8 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative">
              <h3
                className="text-white text-3xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pronto a iniziare?
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-7">
                Compila la pre-iscrizione online o vieni a trovarci.
                Siamo aperti su appuntamento.
              </p>
              <RainbowButton href="#contatti" variant="light" className="tsn-rainbow-outline">
                Contattaci
              </RainbowButton>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
