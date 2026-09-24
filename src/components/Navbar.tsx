"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4">
      <motion.nav
        role="navigation"
        aria-label="Navigazione principale"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full max-w-6xl flex items-center justify-between px-5 sm:px-7 h-14 rounded-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.09)] border border-[#E8E4DC]"
            : "bg-white/75 backdrop-blur-sm border border-[#E8E4DC]/60"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2 cursor-pointer shrink-0" aria-label="TSN Avellino — home">
          <span
            className="text-[#0C0A09] font-bold text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            T.S.N.
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#A8A29E] uppercase font-medium hidden sm:block">
            Avellino · 1892
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[11px] tracking-[0.18em] uppercase text-[#78716C] hover:text-[#CA8A04] transition-colors duration-200 font-medium cursor-pointer py-1"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#iscrizione"
          className="hidden md:inline-flex items-center gap-2 bg-[#CA8A04] text-white text-[11px] tracking-[0.18em] uppercase font-bold px-5 py-2.5 rounded-lg hover:bg-[#92640A] transition-colors duration-200 cursor-pointer shrink-0"
        >
          Pre-Iscrizione
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center gap-[5px] cursor-pointer rounded-lg hover:bg-[#F5F3EF] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            className="block h-[1.5px] bg-[#44403C] origin-center mx-auto w-5"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            className="block h-[1.5px] bg-[#44403C] mx-auto w-5"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            className="block h-[1.5px] bg-[#44403C] origin-center mx-auto w-5"
          />
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-6xl mt-2 bg-white/98 backdrop-blur-md border border-[#E8E4DC] rounded-xl shadow-xl px-6 py-5"
          >
            <ul className="flex flex-col gap-1" role="list">
              {links.map((l) => (
                <li key={l.href} role="none">
                  <Link
                    href={l.href}
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#44403C] hover:text-[#CA8A04] transition-colors py-2.5 px-2 rounded-lg hover:bg-[#FEF9EE] cursor-pointer"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#CA8A04] opacity-0 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-2 border-t border-[#E8E4DC]" role="none">
                <Link
                  href="#iscrizione"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-[#CA8A04] text-white text-[11px] tracking-[0.18em] uppercase font-bold px-5 py-3 rounded-lg cursor-pointer hover:bg-[#92640A] transition-colors"
                >
                  Pre-Iscrizione
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
