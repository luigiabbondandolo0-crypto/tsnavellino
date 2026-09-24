"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Visita Medica",
    desc: "Effettua la visita medica presso un medico sportivo o il tuo medico di base. Richiedi il certificato di idoneità fisica.",
  },
  {
    n: "02",
    title: "Documenti",
    desc: "Prepara: documento d'identità valido, codice fiscale, certificato medico e 2 foto tessera.",
  },
  {
    n: "03",
    title: "Pre-Iscrizione",
    desc: "Compila il modulo di pre-iscrizione online o vieni direttamente in sede. Ti contatteremo per fissare l'appuntamento.",
  },
  {
    n: "04",
    title: "Benvenuto al TSN",
    desc: "Dopo la registrazione sei ufficialmente socio. Accedi ai poligoni, corsi e a tutti i servizi della nostra struttura.",
  },
];

const downloads = [
  { label: "Modulo Domanda di Ammissione", href: "#" },
  { label: "Certificato Medico (Fac-Simile)", href: "#" },
  { label: "Modulo Rinnovo Porto d'Armi", href: "#" },
];

export default function HowToJoin() {
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
    <section id="iscrizione" ref={ref} className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Steps */}
          <div>
            <div
              style={{ animation: visible ? "fadeUp 0.7s ease 0.1s both" : "none" }}
            >
              <p className="text-[#ca8a04] text-xs tracking-[0.4em] uppercase mb-4">
                Come iscriversi
              </p>
              <h2 className="font-['var(--font-cormorant)'] text-4xl font-bold text-[#f5f0e8] leading-tight mb-16">
                Inizia il tuo percorso{" "}
                <span className="text-[#ca8a04] italic">in 4 passi</span>.
              </h2>
            </div>

            <div className="space-y-8">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="flex gap-6"
                  style={{
                    animation: visible ? `fadeUp 0.7s ease ${0.2 + i * 0.12}s both` : "none",
                  }}
                >
                  <div className="shrink-0 pt-1">
                    <span className="font-['var(--font-cormorant)'] text-3xl font-bold text-[#ca8a04]/20">
                      {s.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#f5f0e8] font-semibold mb-2">{s.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download + CTA */}
          <div
            style={{ animation: visible ? "fadeUp 0.7s ease 0.4s both" : "none" }}
          >
            {/* Downloads */}
            <div className="border border-[#1a1a1a] p-8 mb-8">
              <div className="relative">
                <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-[#ca8a04]" />
                <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-[#ca8a04]" />
              </div>
              <p className="text-[#ca8a04] text-xs tracking-[0.4em] uppercase mb-6">
                Modulistica
              </p>
              <div className="space-y-3">
                {downloads.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center justify-between gap-4 py-3 border-b border-[#1a1a1a] last:border-0 group hover:text-[#ca8a04] transition-colors"
                  >
                    <span className="text-[#666] group-hover:text-[#ca8a04] text-sm transition-colors">
                      {d.label}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-[#333] group-hover:text-[#ca8a04] shrink-0 transition-colors"
                    >
                      <path
                        d="M7 2v7M4 6l3 3 3-3M2 11h10"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-[#ca8a04] p-8">
              <h3 className="font-['var(--font-cormorant)'] text-2xl font-bold text-[#080808] mb-3">
                Pronto a iniziare?
              </h3>
              <p className="text-[#5a3e10] text-sm leading-relaxed mb-6">
                Compila la pre-iscrizione online o vieni a trovarci. Siamo aperti
                su appuntamento.
              </p>
              <Link
                href="#contatti"
                className="inline-flex items-center gap-3 bg-[#080808] text-[#ca8a04] text-xs font-semibold tracking-[0.25em] uppercase px-6 py-3 hover:bg-[#111] transition-colors"
              >
                Contattaci
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
