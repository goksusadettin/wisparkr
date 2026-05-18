"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">Adım Adım Gelecek</h2>
          <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
            Wisparkr ile dönüşüm yolculuğunuz oldukça basit.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 hidden md:block" />

          {HOW_IT_WORKS.map((item, i) => {
            const borderColor = item.color === "secondary" ? "border-secondary" : "border-primary";
            const textColor = item.color === "secondary" ? "text-secondary" : "text-primary";
            const glowColor = item.color === "secondary"
              ? "shadow-[0_0_15px_rgba(208,188,255,0.3)]"
              : "shadow-[0_0_15px_rgba(173,198,255,0.3)]";

            return (
              <motion.div
                key={item.step}
                className="relative z-10 flex flex-col items-center text-center flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-full bg-surface-container border-2 ${borderColor} flex items-center justify-center ${textColor} font-bold text-xl mb-6 ${glowColor}`}>
                  {item.step}
                </div>
                <h4 className="text-[20px] font-semibold text-on-surface mb-3">{item.title}</h4>
                <p className="text-body-md text-on-surface-variant max-w-[280px]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
