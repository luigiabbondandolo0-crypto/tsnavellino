"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";

const heroImages = [
  { src: "/images/poligono-1.jpg", label: "Poligono 12m" },
  { src: "/images/poligono-3.jpg", label: "Tiro di precisione" },
  { src: "/images/gallery-6.jpg", label: "I nostri atleti" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF9] pt-20">
      {/* Lightweight animated paths */}
      <BackgroundPaths />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(202,138,4,0.055) 0%, transparent 68%)" }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#CA8A04 1px, transparent 1px), linear-gradient(90deg, #CA8A04 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
        >
          <div className="h-px w-12 bg-[#CA8A04]" />
          <span className="text-[#CA8A04] text-[11px] tracking-[0.42em] uppercase font-medium">
            Dal 1892 · Avellino · Irpinia
          </span>
          <div className="h-px w-12 bg-[#CA8A04]" />
        </motion.div>

        {/* Headline — block animation, no per-letter (avoids layout shift) */}
        <motion.h1
          initial={reduce ? {} : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-[0.9] tracking-tight mb-7 sm:mb-10 text-[#0C0A09]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 12vw, 9.5rem)",
          }}
        >
          Precisione
          <br />
          <em className="text-[#CA8A04]">è Arte.</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
          className="text-[#57534E] text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12"
        >
          La sezione di Tiro a Segno Nazionale più storica dell&apos;Irpinia.{" "}
          <span className="text-[#0C0A09] font-semibold">
            134 anni di disciplina, sport e comunità.
          </span>
        </motion.p>

        {/* CTAs — Rainbow button */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <RainbowButton
            href="#iscrizione"
            variant="dark"
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          >
            Iscriviti Ora
          </RainbowButton>

          <motion.a
            href="#strutture"
            whileHover={reduce ? {} : { scale: 1.03 }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-2.5 border-2 border-[#0C0A09]/15 text-[#0C0A09] font-bold tracking-wide px-6 sm:px-9 py-4 rounded-xl text-sm hover:border-[#CA8A04] hover:text-[#CA8A04] transition-all duration-200 cursor-pointer"
          >
            Scopri i Poligoni
          </motion.a>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          className="mt-12 sm:mt-20 grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto"
        >
          {heroImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={reduce ? {} : { scale: 1.04, y: -4 }}
              transition={{ duration: 0.22 }}
              className="relative h-28 md:h-36 rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-2 left-2.5 text-white text-[10px] tracking-widest uppercase font-semibold">
                {img.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-5 h-8 border border-[#C9C3B8] rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-[#CA8A04] rounded-full" />
        </motion.div>
        <span className="text-[#A8A29E] text-[10px] tracking-[0.3em] uppercase">Scorri</span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E8E4DC]" />
    </section>
  );
}
