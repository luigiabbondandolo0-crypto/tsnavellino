"use client";

import { motion, useReducedMotion } from "framer-motion";

const reviews = [
  {
    name: "Andrea Giugliano",
    badge: "Local Guide",
    time: "2 anni fa",
    stars: 5,
    text: "Top. I migliori. Giuseppe e tutto lo staff degli istruttori sono eccezionali, si mettono sempre a disposizione, super professionali e alla mano. Non a caso, parto da Napoli per venire a sparare qua!",
  },
  {
    name: "Antonio Santaniello",
    badge: "Local Guide",
    time: "3 anni fa",
    stars: 5,
    text: "Personale sempre molto disponibile e gentilissimo, il miglior poligono dove esercitarsi e vivere la propria passione.",
  },
  {
    name: "Fiore Graziano",
    badge: "Local Guide",
    time: "4 anni fa",
    stars: 5,
    text: "Disponibilità, cortesia e competenza: staff e location da 10 e lode.",
  },
  {
    name: "ParaSiempreNapoli",
    badge: "Local Guide",
    time: "10 mesi fa",
    stars: 5,
    text: "Sono stato qui per conseguire il certificato di maneggio alle armi e sono rimasto davvero colpito da tanta professionalità da parte di tutte le persone con cui sono stato a contatto.",
  },
  {
    name: "Luigi Bruno",
    badge: null,
    time: "un anno fa",
    stars: 5,
    text: "Personale preparatissimo, disponibile e garbato. Si respira un'aria serena e familiare. Costi nella norma, facile da raggiungere e buon area parcheggio.",
  },
  {
    name: "Antonio Argenio",
    badge: "Local Guide",
    time: "2 anni fa",
    stars: 5,
    text: "Edificio storico e ben strutturato. Il personale è sempre gentile e disponibile e gli istruttori preparati e sempre prodighi di buoni consigli.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n} stelle su 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < n ? "#CA8A04" : "#E8E4DC"} aria-hidden="true">
          <path d="M7 1l1.5 4H13l-3.5 2.5 1.3 4L7 9 3.2 11.5l1.3-4L1 5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

// Google "G" logo as inline SVG — no external fetch needed
function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="recensioni"
      aria-labelledby="recensioni-title"
      className="tsn-section bg-[#F5F3EF]"
    >
      <div className="tsn-container">

        {/* Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="tsn-section-label">Cosa dicono di noi</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-10">
            <h2 id="recensioni-title" className="tsn-section-title">
              Recensioni <em className="text-[#CA8A04]">Google</em>.
            </h2>

            {/* Aggregate rating badge */}
            <div className="flex items-center gap-3 mb-1 shrink-0">
              <div className="flex flex-col items-center bg-white border border-[#E8E4DC] rounded-xl px-5 py-3 shadow-sm">
                <span
                  className="text-3xl font-bold text-[#0C0A09] leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  4.7
                </span>
                <Stars n={5} />
                <div className="flex items-center gap-1.5 mt-2">
                  <GoogleLogo />
                  <span className="text-[10px] text-[#A8A29E] tracking-wide">su Google</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="tsn-card p-6 flex flex-col gap-4"
            >
              {/* Stars + Google logo */}
              <div className="flex items-center justify-between">
                <Stars n={r.stars} />
                <GoogleLogo />
              </div>

              {/* Quote */}
              <blockquote className="text-[#44403C] text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F5F3EF]">
                {/* Avatar initial */}
                <div
                  className="w-9 h-9 rounded-full bg-[#CA8A04] flex items-center justify-center text-white text-sm font-bold shrink-0"
                  aria-hidden="true"
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-[#0C0A09] text-sm font-semibold leading-none mb-1">{r.name}</p>
                  <div className="flex items-center gap-1.5">
                    {r.badge && (
                      <>
                        <span className="text-[10px] text-[#78716C]">{r.badge}</span>
                        <span className="text-[#C9C3B8] text-[10px]">·</span>
                      </>
                    )}
                    <span className="text-[10px] text-[#A8A29E]">{r.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-center"
        >
          <a
            href="https://maps.google.com/?q=Tiro+a+Segno+Nazionale+Avellino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[#78716C] text-sm hover:text-[#CA8A04] transition-colors duration-200 cursor-pointer group"
          >
            <GoogleLogo />
            <span className="group-hover:underline underline-offset-4">
              Leggi tutte le recensioni su Google Maps
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
