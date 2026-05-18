"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2-mobile md:text-h2 text-on-surface">Müşterilerimiz Ne Diyor?</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item, i) => (
          <motion.div
            key={item.name}
            className="glass p-8 rounded-3xl border border-white/5 relative flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <span className="absolute top-6 right-6 text-[48px] leading-none text-primary/20 font-serif select-none">&ldquo;</span>
            <p className="text-body-md text-on-surface-variant mb-8 italic flex-1">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-base font-bold text-primary shrink-0">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="text-on-surface font-semibold text-sm">{item.name}</p>
                <p className="text-on-surface-variant text-xs">{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
