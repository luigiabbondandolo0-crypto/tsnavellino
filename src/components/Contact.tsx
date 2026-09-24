"use client";

import { useRef, useEffect, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up server action / email service
    setSent(true);
  };

  return (
    <section id="contatti" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-20"
          style={{ animation: visible ? "fadeUp 0.7s ease 0.1s both" : "none" }}
        >
          <p className="text-[#c9a04a] text-xs tracking-[0.4em] uppercase mb-4">
            Dove siamo
          </p>
          <h2 className="font-['var(--font-playfair)'] text-4xl md:text-5xl font-bold text-[#f0ece4] leading-tight">
            Contattaci.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div
            className="space-y-8"
            style={{ animation: visible ? "fadeUp 0.7s ease 0.2s both" : "none" }}
          >
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1C6.2 1 4 3.2 4 6c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z" stroke="#c9a04a" strokeWidth="1.2" />
                    <circle cx="9" cy="6" r="2" stroke="#c9a04a" strokeWidth="1.2" />
                  </svg>
                ),
                label: "Indirizzo",
                value: "Via F. Tedesco 203, Avellino (AV)",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3.5c0-.3.2-.5.5-.5H6l1.5 4-2 2a11 11 0 005 5l2-2 4 1.5v2.5c0 .3-.2.5-.5.5C7 16 2 11 3 3.5z" stroke="#c9a04a" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                ),
                label: "Telefono",
                value: "0825 74254",
                href: "tel:082574254",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#c9a04a" strokeWidth="1.2" />
                    <path d="M2 6l7 5 7-5" stroke="#c9a04a" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
                label: "Orari",
                value: "Su appuntamento",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-5">
                <div className="w-10 h-10 border border-[#1f1f1f] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[#444] text-xs tracking-[0.25em] uppercase mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-[#888] hover:text-[#c9a04a] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#888]">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-4 border border-[#1a1a1a] h-48 flex items-center justify-center bg-[#0a0a0a]">
              <div className="text-center">
                <div className="text-[#333] text-xs tracking-widest uppercase mb-2">Mappa</div>
                <a
                  href="https://maps.google.com/?q=Via+F.+Tedesco+203+Avellino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a04a] text-xs underline underline-offset-4"
                >
                  Apri su Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            style={{ animation: visible ? "fadeUp 0.7s ease 0.35s both" : "none" }}
          >
            <div className="border border-[#1a1a1a] p-8 relative">
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-[#c9a04a]" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-[#c9a04a]" />

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border border-[#c9a04a] flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l5 5 8-8" stroke="#c9a04a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[#888]">Messaggio inviato. Ti risponderemo presto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#444] text-xs tracking-[0.25em] uppercase mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full bg-transparent border border-[#1f1f1f] text-[#f0ece4] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a04a] transition-colors placeholder:text-[#333]"
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444] text-xs tracking-[0.25em] uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border border-[#1f1f1f] text-[#f0ece4] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a04a] transition-colors placeholder:text-[#333]"
                      placeholder="mario@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#444] text-xs tracking-[0.25em] uppercase mb-2">
                      Messaggio
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.messaggio}
                      onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                      className="w-full bg-transparent border border-[#1f1f1f] text-[#f0ece4] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a04a] transition-colors placeholder:text-[#333] resize-none"
                      placeholder="Vorrei informazioni su..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c9a04a] text-[#080808] text-xs font-semibold tracking-[0.25em] uppercase py-4 hover:bg-[#e8c96a] transition-colors duration-300"
                  >
                    Invia Messaggio
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
