"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF9] pt-20">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #CA8A04 0%, transparent 70%)" }}
      />

      {/* Centered crosshair watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none">
        <svg width="480" height="480" viewBox="0 0 320 320" fill="none">
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

      {/* Main content — centered */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Year badge */}
        <div className="tsn-animate-1 flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-10 bg-[#CA8A04]" />
          <span className="text-[#CA8A04] text-[11px] tracking-[0.4em] uppercase font-medium">
            Dal 1892 · Avellino · Irpinia
          </span>
          <div className="h-px w-10 bg-[#CA8A04]" />
        </div>

        {/* Headline */}
        <h1
          className="tsn-animate-2 font-bold leading-[0.88] tracking-tight mb-8 text-[#0C0A09]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem,11vw,9rem)",
          }}
        >
          Precisione
          <br />
          <em className="text-[#CA8A04] not-italic">è Arte.</em>
        </h1>

        {/* Subtitle */}
        <p className="tsn-animate-3 text-[#57534E] text-lg max-w-xl mx-auto leading-relaxed mb-10">
          La sezione di Tiro a Segno Nazionale più storica dell&apos;Irpinia.{" "}
          <span className="text-[#0C0A09] font-medium">
            134 anni di disciplina, sport e comunità.
          </span>
        </p>

        {/* CTA buttons */}
        <div className="tsn-animate-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#iscrizione"
            className="group inline-flex items-center gap-2.5 bg-[#CA8A04] text-white font-semibold tracking-wide px-8 py-3.5 rounded-lg text-sm hover:bg-[#92640A] transition-colors duration-200 cursor-pointer"
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
            className="inline-flex items-center gap-2.5 border-2 border-[#0C0A09] text-[#0C0A09] font-semibold tracking-wide px-8 py-3.5 rounded-lg text-sm hover:bg-[#0C0A09] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Scopri i Servizi
          </Link>
        </div>
      </div>

      {/* Scroll indicator — Framer Motion bounce only, no initial opacity: 0 at top level */}
      <div className="tsn-animate-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-[#C9C3B8] rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-[#CA8A04] rounded-full" />
        </motion.div>
        <span className="text-[#A8A29E] text-[10px] tracking-[0.3em] uppercase">
          Scorri
        </span>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E8E4DC]" />
    </section>
  );
}
