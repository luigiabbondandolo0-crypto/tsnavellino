import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C0A09] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <div
                className="text-white font-bold text-2xl tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
              >
                T.S.N.
              </div>
              <div className="text-[11px] tracking-[0.3em] text-[#57534E] uppercase mt-0.5">
                Avellino · Est. 1892
              </div>
            </div>
            <p className="text-[#57534E] text-sm leading-relaxed max-w-xs">
              Tiro a Segno Nazionale sezione di Avellino.
              Dal 1892, la precisione è arte.
            </p>
            <div className="mt-5 text-[#3A3632] text-sm">
              Via F. Tedesco 203, Avellino (AV)
              <br />
              Tel. <a href="tel:082574254" className="hover:text-[#CA8A04] transition-colors cursor-pointer">0825 74254</a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[#3A3632] text-[10px] tracking-[0.3em] uppercase mb-5 font-medium">
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
                  <Link href={l.href} className="text-[#57534E] text-sm hover:text-[#CA8A04] transition-colors cursor-pointer">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <div className="text-[#3A3632] text-[10px] tracking-[0.3em] uppercase mb-5 font-medium">
              Modulistica
            </div>
            <ul className="space-y-3">
              {["Domanda di Ammissione", "Certificato Medico", "Rinnovo Porto d'Armi"].map((d) => (
                <li key={d}>
                  <a href="#" className="flex items-center gap-2 text-[#57534E] text-sm hover:text-[#CA8A04] transition-colors cursor-pointer">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v6M2.5 4.5l2.5 2.5 2.5-2.5M1 8.5h8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[#3A3632] text-xs">
            © {new Date().getFullYear()} T.S.N. Avellino · Tutti i diritti riservati
          </span>
          <span
            className="text-[#3A3632] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Est. 1892
          </span>
        </div>
      </div>
    </footer>
  );
}
