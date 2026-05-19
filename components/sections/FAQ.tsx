"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sss" className="py-section-gap px-gutter max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">Sıkça Sorulan Sorular</h2>
        <p className="text-body-md text-on-surface-variant">
          Aradığınız cevabı bulamadınız mı?{" "}
          <a href="https://wa.me/905311053295" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            WhatsApp
          </a>
          {" "}veya{" "}
          <a href="/iletisim" className="text-primary hover:underline">iletişim formundan</a>
          {" "}bize yazın, 1 saat içinde dönelim.
        </p>
      </motion.div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className="glass rounded-2xl border border-white/5 overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-body-md font-medium text-on-surface pr-4">{item.question}</span>
              <ChevronDown
                size={18}
                className={`text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-body-md text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
