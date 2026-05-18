"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto mb-20">
      <motion.div
        className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glow-sphere w-[600px] h-[600px] bg-primary/20 -top-1/2 left-0" />
        <div className="relative z-10">
          <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-8 leading-tight">
            İşinizi Otomatik Pilota Almaya <span className="gradient-text">Hazır mısın?</span>
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
            Vakit kaybetmeyin, dijital dönüşümünüzü bugün başlatın.
          </p>
          <Link
            href="/iletisim"
            className="btn-primary inline-block px-12 py-5 text-lg"
          >
            Görüşme Talep Et
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
