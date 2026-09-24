"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contatti" className="py-28 px-6 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#CA8A04] text-[11px] tracking-[0.35em] uppercase font-medium mb-4">
            Dove siamo
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#0C0A09] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contattaci.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Info column */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.8 1 4 2.8 4 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.2-1.8-4-4-4z" stroke="#CA8A04" strokeWidth="1.2" />
                    <circle cx="8" cy="5" r="1.5" stroke="#CA8A04" strokeWidth="1.2" />
                  </svg>
                ),
                label: "Indirizzo",
                value: "Via F. Tedesco 203, Avellino (AV)",
                href: undefined as string | undefined,
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 3c-.3 0-.5.2-.5.5V6l1.5 4-2 2a10 10 0 005 5l2-2 4 1.5h2.5c.3 0 .5-.2.5-.5C16 8.5 7.5 0 2.5 3z" stroke="#CA8A04" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                ),
                label: "Telefono",
                value: "0825 74254",
                href: "tel:082574254",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3.5" width="14" height="9" rx="1.5" stroke="#CA8A04" strokeWidth="1.2" />
                    <path d="M1.5 5.5l6.5 4.5 6.5-4.5" stroke="#CA8A04" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
                label: "Orari",
                value: "Su appuntamento",
                href: undefined as string | undefined,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={reduce ? {} : { x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 bg-white border border-[#E8E4DC] rounded-xl p-4 hover:border-[#CA8A04]/40 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 bg-[#FEF9EE] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[#A8A29E] text-[10px] tracking-[0.25em] uppercase font-medium mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-[#44403C] text-sm hover:text-[#CA8A04] transition-colors cursor-pointer">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#44403C] text-sm">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <div className="bg-white border border-[#E8E4DC] rounded-xl h-48 flex items-center justify-center overflow-hidden hover:border-[#CA8A04]/40 hover:shadow-md transition-all duration-200 group">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FEF9EE] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C5.8 1 4 2.8 4 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.2-1.8-4-4-4z" stroke="#CA8A04" strokeWidth="1.3" />
                    <circle cx="8" cy="5" r="1.5" stroke="#CA8A04" strokeWidth="1.3" />
                  </svg>
                </div>
                <p className="text-[#C9C3B8] text-xs tracking-widest uppercase mb-2">Mappa</p>
                <a
                  href="https://maps.google.com/?q=Via+F.+Tedesco+203+Avellino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CA8A04] text-sm font-medium underline underline-offset-4 hover:text-[#92640A] transition-colors cursor-pointer"
                >
                  Apri su Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white border border-[#E8E4DC] rounded-2xl p-7 shadow-sm">
              {sent ? (
                <div className="text-center py-14">
                  <motion.div
                    initial={reduce ? {} : { scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="w-16 h-16 bg-[#FEF9EE] rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                      <path d="M4 11l5.5 5.5L18 6" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <p className="text-[#0C0A09] font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Messaggio inviato!
                  </p>
                  <p className="text-[#78716C] text-sm">Ti risponderemo al più presto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "nome", label: "Nome", type: "text", placeholder: "Mario Rossi" },
                    { id: "email", label: "Email", type: "email", placeholder: "mario@email.com" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        className="block text-[#44403C] text-[11px] tracking-[0.22em] uppercase font-medium mb-2"
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        required
                        value={form[f.id as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full bg-[#FAFAF9] border border-[#E8E4DC] rounded-lg text-[#0C0A09] px-4 py-3 text-sm focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/10 transition-all placeholder:text-[#C9C3B8]"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="messaggio"
                      className="block text-[#44403C] text-[11px] tracking-[0.22em] uppercase font-medium mb-2"
                    >
                      Messaggio
                    </label>
                    <textarea
                      id="messaggio"
                      required
                      rows={5}
                      value={form.messaggio}
                      onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                      placeholder="Vorrei informazioni su..."
                      className="w-full bg-[#FAFAF9] border border-[#E8E4DC] rounded-lg text-[#0C0A09] px-4 py-3 text-sm focus:outline-none focus:border-[#CA8A04] focus:ring-2 focus:ring-[#CA8A04]/10 transition-all placeholder:text-[#C9C3B8] resize-none"
                    />
                  </div>
                  <div className="tsn-rainbow-btn w-full p-[2px]">
                    <button
                      type="submit"
                      className="relative z-10 w-full py-4 text-sm font-bold tracking-wide text-white rounded-[0.65rem] hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                    >
                      Invia Messaggio
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
