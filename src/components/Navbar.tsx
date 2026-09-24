"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#storia", label: "Storia" },
  { href: "#servizi", label: "Servizi" },
  { href: "#strutture", label: "Strutture" },
  { href: "#iscrizione", label: "Iscriviti" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-[#c9a04a] font-['var(--font-playfair)'] font-bold text-lg tracking-widest uppercase">
            T.S.N.
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#666] uppercase">
            Avellino
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase text-[#888] hover:text-[#c9a04a] transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#iscrizione"
          className="hidden md:inline-flex items-center gap-2 border border-[#c9a04a]/40 text-[#c9a04a] text-xs tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#c9a04a] hover:text-[#080808] transition-all duration-300"
        >
          Pre-Iscrizione
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-px bg-[#c9a04a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-px bg-[#c9a04a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px bg-[#c9a04a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#080808]/98 backdrop-blur-md ${
          menuOpen ? "max-h-96 border-b border-[#1a1a1a]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-[0.2em] uppercase text-[#888] hover:text-[#c9a04a] transition-colors py-1"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#iscrizione"
              onClick={() => setMenuOpen(false)}
              className="inline-flex border border-[#c9a04a]/40 text-[#c9a04a] text-xs tracking-[0.2em] uppercase px-4 py-2 mt-2"
            >
              Pre-Iscrizione
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
