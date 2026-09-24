import Link from "next/link";

const navLinks = [
  { href: "#storia", label: "Storia" },
  { href: "#servizi", label: "Servizi" },
  { href: "#strutture", label: "Strutture" },
  { href: "#iscrizione", label: "Iscrizione" },
  { href: "#contatti", label: "Contatti" },
];

const downloads = [
  { label: "Domanda di Ammissione", href: "/docs/modulo-tsn.pdf" },
  { label: "Certificato Medico", href: "/docs/certificato-medico.pdf" },
  { label: "Rinnovo Porto d'Armi", href: "/docs/modulo-porto-darmi.pdf" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#2A211B]"
      role="contentinfo"
      style={{
        backgroundImage: `radial-gradient(ellipse at 60% 0%, rgba(202,138,4,0.07) 0%, transparent 60%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="mb-5">
              <div
                className="text-white/95 font-bold text-2xl tracking-widest leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                T.S.N.
              </div>
              <div className="text-[11px] tracking-[0.3em] text-white/30 uppercase mt-1 font-medium">
                Avellino · Est. 1892
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Tiro a Segno Nazionale, sezione di Avellino.
              Dal 1892 la precisione è arte.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2.5 text-white/45">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                  <path d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" stroke="#CA8A04" strokeWidth="1.2" />
                  <circle cx="7" cy="5" r="1.2" stroke="#CA8A04" strokeWidth="1.2" />
                </svg>
                <span>Via F. Tedesco 203, Avellino (AV)</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/45">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <path d="M2 2.5c0-.3.2-.5.5-.5h2l1 3-1.5 1.5a9 9 0 004 4l1.5-1.5 3 1v2c0 .3-.2.5-.5.5C5.6 12.5 1.5 8.4 2 2.5z" stroke="#CA8A04" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                <a href="tel:082574254" className="hover:text-[#CA8A04] transition-colors duration-200">
                  0825 74254
                </a>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-5 font-medium">
              Navigazione
            </p>
            <ul className="space-y-3" role="list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-[#CA8A04] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#CA8A04] group-hover:w-3 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Downloads */}
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-5 font-medium">
              Modulistica
            </p>
            <ul className="space-y-3" role="list">
              {downloads.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Scarica ${d.label}`}
                    className="flex items-center gap-2 text-white/50 text-sm hover:text-[#CA8A04] transition-colors duration-200 group"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 group-hover:translate-y-0.5 transition-transform duration-200">
                      <path d="M5 1v6M2.5 4.5l2.5 2.5 2.5-2.5M1 8.5h8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider + bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/25 text-xs">
            © {new Date().getFullYear()} T.S.N. Avellino · Tutti i diritti riservati
          </span>
          <div className="flex items-center gap-4">
            <span
              className="text-white/25 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dal 1892
            </span>
            <div className="h-px w-12 bg-[#CA8A04]/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
