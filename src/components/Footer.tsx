import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="text-[#c9a04a] font-['var(--font-playfair)'] font-bold text-2xl tracking-widest">
                T.S.N.
              </div>
              <div className="text-xs tracking-[0.3em] text-[#444] uppercase">
                Avellino
              </div>
            </div>
            <p className="text-[#444] text-sm leading-relaxed max-w-xs">
              Tiro a Segno Nazionale sezione di Avellino. Dal 1892, la
              precisione è arte.
            </p>
            <div className="mt-6 text-[#333] text-xs">
              Via F. Tedesco 203, Avellino (AV) · Tel. 0825 74254
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-[#444] text-xs tracking-[0.3em] uppercase mb-5">
              Navigazione
            </div>
            <ul className="space-y-3">
              {[
                { href: "#storia", label: "Storia" },
                { href: "#servizi", label: "Servizi" },
                { href: "#strutture", label: "Strutture" },
                { href: "#iscrizione", label: "Iscrizione" },
                { href: "#contatti", label: "Contatti" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#444] text-sm hover:text-[#c9a04a] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <div className="text-[#444] text-xs tracking-[0.3em] uppercase mb-5">
              Modulistica
            </div>
            <ul className="space-y-3">
              {[
                "Domanda di Ammissione",
                "Certificato Medico",
                "Rinnovo Porto d'Armi",
              ].map((d) => (
                <li key={d}>
                  <a
                    href="#"
                    className="text-[#444] text-sm hover:text-[#c9a04a] transition-colors flex items-center gap-2"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v6M2.5 4.5l2.5 2.5 2.5-2.5M1 8.5h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#2a2a2a] text-xs">
            © {new Date().getFullYear()} T.S.N. Avellino · Tutti i diritti riservati
          </span>
          <span className="text-[#2a2a2a] text-xs tracking-widest">
            EST. 1892
          </span>
        </div>
      </div>
    </footer>
  );
}
