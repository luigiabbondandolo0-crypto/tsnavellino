"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAF9] pt-24">
      {/* Warm grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#CA8A04 1px, transparent 1px), linear-gradient(90deg, #CA8A04 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #CA8A04 0%, transparent 70%)" }}
      />

      {/* Crosshair watermark */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="140" stroke="#0C0A09" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="90" stroke="#0C0A09" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="40" stroke="#0C0A09" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="6" fill="#0C0A09" />
          <line x1="160" y1="0" x2="160" y2="110" stroke="#0C0A09" strokeWidth="1.5" />
          <line x1="160" y1="210" x2="160" y2="320" stroke="#0C0A09" strokeWidth="1.5" />
          <line x1="0" y1="160" x2="110" y2="160" stroke="#0C0A09" strokeWidth="1.5" />
          <line x1="210" y1="160" x2="320" y2="160" stroke="#0C0A09" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Year label */}
          <motion.div
            variants={reduce ? undefined : item}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-px w-10 bg-[#CA8A04]" />
            <span className="text-[#CA8A04] text-[11px] tracking-[0.4em] uppercase font-medium">
              Dal 1892 · Avellino · Irpinia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reduce ? undefined : item}
            className="text-[clamp(3.5rem,9vw,7.5rem)] font-bold leading-[0.88] tracking-tight mb-8 text-[#0C0A09]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Precisione
            <br />
            <em className="text-[#CA8A04] not-italic">è Arte.</em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={reduce ? undefined : item}
            className="text-[#57534E] text-lg max-w-xl leading-relaxed mb-10"
          >
            La sezione di Tiro a Segno Nazionale più storica dell&apos;Irpinia.{" "}
            <span className="text-[#0C0A09] font-medium">
              134 anni di disciplina, sport e comunità.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : item}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#iscrizione"
              className="group inline-flex items-center gap-2.5 bg-[#CA8A04] text-white text-[11px] font-semibold tracking-[0.22em] uppercase px-8 py-4 rounded-lg hover:bg-[#92640A] transition-colors duration-200 cursor-pointer"
            >
              Iscriviti Ora
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#servizi"
              className="inline-flex items-center gap-2.5 border border-[#C9C3B8] text-[#44403C] text-[11px] font-medium tracking-[0.22em] uppercase px-8 py-4 rounded-lg hover:border-[#CA8A04] hover:text-[#CA8A04] transition-all duration-200 cursor-pointer"
            >
              Scopri i Servizi
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-6 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border border-[#C9C3B8] rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-[#CA8A04] rounded-full" />
          </motion.div>
          <span className="text-[#A8A29E] text-[10px] tracking-[0.3em] uppercase">
            Scorri
          </span>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E8E4DC]" />
    </section>
  );
}
