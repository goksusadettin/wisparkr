"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">Şeffaf Fiyatlandırma</h2>
        <p className="text-body-md text-on-surface-variant">Her ölçekteki işletme için uygun çözümler.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {PRICING.map((tier, i) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={tier.highlight
              ? "relative p-8 rounded-[2rem] flex flex-col gradient-border shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-10 bg-surface"
              : "glass p-8 rounded-[2rem] border border-white/5 flex flex-col"
            }
          >
            {tier.highlight && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[11px] px-4 py-1 rounded-full uppercase tracking-widest">
                Popüler
              </div>
            )}

            <h4 className="text-[24px] font-semibold text-on-surface mb-8">{tier.name}</h4>

            <ul className="space-y-4 mb-10 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <Check size={16} className={tier.highlight ? "text-secondary" : "text-primary"} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/iletisim"
              className={tier.highlight
                ? "w-full py-4 rounded-xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
                : "w-full py-4 rounded-xl font-bold text-center border border-white/10 text-on-surface hover:bg-white/5 transition-all"
              }
            >
              {tier.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
