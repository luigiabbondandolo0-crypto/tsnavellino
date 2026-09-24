"use client";

import { useRef, useEffect, useState } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="storia" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left: decorative timeline */}
        <div
          className="relative"
          style={{
            animation: visible ? "fadeUp 0.8s ease 0.1s both" : "none",
          }}
        >
          {/* Ornamental frame */}
          <div className="relative border border-[#1f1f1f] p-8 md:p-12">
            <div className="absolute -top-px -left-px w-12 h-12 border-t border-l border-[#c9a04a]" />
            <div className="absolute -bottom-px -right-px w-12 h-12 border-b border-r border-[#c9a04a]" />

            <div className="text-[#c9a04a] text-xs tracking-[0.4em] uppercase mb-6">
              La nostra storia
            </div>

            <div className="space-y-8">
              {[
                { year: "1892", text: "Fondazione della sezione di Avellino del Tiro a Segno Nazionale." },
                { year: "1900s", text: "Espansione delle strutture e crescita della comunità di tiratori irpini." },
                { year: "Oggi", text: "Due poligoni interni, corsi per principianti ed esperti, servizi per porto d'armi." },
              ].map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-[#c9a04a] mt-1.5 shrink-0" />
                    <div className="w-px flex-1 bg-[#1f1f1f] mt-2" />
                  </div>
                  <div>
                    <div className="font-['var(--font-playfair)'] text-[#c9a04a] text-lg font-bold mb-1">
                      {item.year}
                    </div>
                    <p className="text-[#666] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div
          style={{
            animation: visible ? "fadeUp 0.8s ease 0.3s both" : "none",
          }}
        >
          <p className="text-[#c9a04a] text-xs tracking-[0.4em] uppercase mb-4">
            Chi siamo
          </p>
          <h2 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-[#f0ece4] leading-tight mb-8">
            134 anni di{" "}
            <span className="text-[#c9a04a] italic">disciplina</span> e{" "}
            <span className="text-[#c9a04a] italic">passione</span>.
          </h2>
          <div className="space-y-5 text-[#666] leading-relaxed">
            <p>
              La sezione di Avellino del Tiro a Segno Nazionale nasce nel{" "}
              <span className="text-[#888]">1892</span>, diventando uno dei
              punti di riferimento per gli amanti del tiro sportivo in tutta
              l&apos;Irpinia.
            </p>
            <p>
              Negli anni abbiamo accolto centinaia di soci, da principianti
              curiosi ad atleti agonisti, offrendo strutture moderne, istruttori
              qualificati e un ambiente fatto di rispetto e cordialità.
            </p>
            <p>
              Siamo sede ufficiale per il{" "}
              <span className="text-[#888]">rilascio e rinnovo del porto d&apos;armi</span>{" "}
              e per la certificazione del maneggio delle armi.
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-[#1a1a1a]">
            <blockquote className="font-['var(--font-playfair)'] text-xl italic text-[#888]">
              &ldquo;134 anni di storia con tanta cordialità.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
