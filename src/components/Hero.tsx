"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) {
        lineRef.current.style.transform = "scaleX(1)";
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(202,138,4,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(202,138,4,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-[#1a1200]/30 via-transparent to-transparent" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ca8a04]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Year badge */}
        <div
          className="flex items-center gap-4 mb-12"
          style={{ animation: "fadeIn 1s ease 0.2s both" }}
        >
          <div
            ref={lineRef}
            className="h-px w-16 bg-[#ca8a04] origin-left transition-transform duration-700"
            style={{ transform: "scaleX(0)" }}
          />
          <span className="text-[#ca8a04] text-xs tracking-[0.4em] uppercase font-light">
            Dal 1892 · Avellino · Irpinia
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-['var(--font-cormorant)'] text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-8"
          style={{ animation: "fadeUp 0.9s ease 0.3s both" }}
        >
          <span className="block text-[#f5f0e8]">Precisione</span>
          <span className="block text-[#ca8a04] italic">è Arte.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-[#888] text-base md:text-lg max-w-lg leading-relaxed tracking-wide mb-12"
          style={{ animation: "fadeUp 0.9s ease 0.5s both" }}
        >
          La sezione di Tiro a Segno Nazionale più storica dell&apos;Irpinia.{" "}
          <span className="text-[#ca8a04]/70">
            134 anni di disciplina, sport e comunità.
          </span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fadeUp 0.9s ease 0.7s both" }}
        >
          <Link
            href="#iscrizione"
            className="group flex items-center gap-3 bg-[#ca8a04] text-[#080808] text-xs font-semibold tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#eab308] transition-colors duration-300"
          >
            Iscriviti Ora
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#servizi"
            className="flex items-center gap-3 border border-[#333] text-[#888] text-xs tracking-[0.25em] uppercase px-8 py-4 hover:border-[#ca8a04]/50 hover:text-[#ca8a04] transition-all duration-300"
          >
            Scopri i Servizi
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "fadeIn 1s ease 1.2s both" }}
        >
          <span className="text-[#444] text-[10px] tracking-[0.3em] uppercase">
            Scorri
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#ca8a04]/40 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
    </section>
  );
}
