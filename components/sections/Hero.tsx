"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const ROTATING_TEXTS = [
  "WhatsApp Otomasyonu",
  "AI Chatbot Entegrasyonu",
  "CRM Bağlantısı",
  "Lead Yakalama Sistemi",
  "E-posta Otomasyonu",
  "Süreç Analitiği",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-gutter overflow-hidden flex flex-col items-center justify-center">
      <div className="glow-sphere w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px]" />
      <div className="glow-sphere w-[400px] h-[400px] bg-secondary bottom-[-50px] right-[-50px]" />

      {/* Yüzen partiküller */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${[2, 3, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3][i]}px`,
              height: `${[2, 3, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3][i]}px`,
              left: `${[8, 15, 25, 35, 45, 55, 65, 75, 85, 92, 20, 40, 60, 80, 30, 50, 70, 90][i]}%`,
              top: `${[20, 40, 15, 60, 30, 70, 25, 50, 35, 55, 80, 10, 45, 65, 75, 85, 20, 40][i]}%`,
              background: i % 3 === 0 ? "rgba(99,102,241,0.6)" : i % 3 === 1 ? "rgba(168,85,247,0.5)" : "rgba(6,182,212,0.5)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="text-primary text-label-sm">⚡ Yapay Zeka Destekli Otomasyon</span>
          <ArrowRight size={14} className="text-on-surface-variant" />
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-h1-mobile md:text-h1 text-on-surface mb-6 leading-tight"
        >
          İşinizi{" "}
          <span className="gradient-text">Otomatik</span>{" "}
          Pilota Alın.
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="h-14 flex items-center justify-center mb-4"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="gradient-text font-bold text-3xl sm:text-4xl lg:text-5xl whitespace-nowrap"
            >
              {ROTATING_TEXTS[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto"
        >
          Tekrar eden işlere veda. Wisparkr ile süreçleriniz kendiliğinden çalışsın, siz büyümeye odaklanın.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/iletisim"
            className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2"
          >
            Ücretsiz Görüşme Al
          </Link>
          <a
            href="#nasil-calisir"
            className="w-full sm:w-auto btn-ghost inline-flex items-center justify-center gap-2"
          >
            Nasıl Çalışır? <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000" />
          <div className="relative glass rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl p-1">
            <div className="rounded-[1.75rem] overflow-hidden bg-surface-container-lowest">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 h-6 rounded-md bg-surface-container flex items-center px-3">
                  <span className="text-xs text-on-surface-variant">app.wisparkr.com/dashboard</span>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Aktif Botlar", value: "24", trend: "+12%" },
                  { label: "Aylık İşlem", value: "48.2K", trend: "+34%" },
                  { label: "Tasarruf", value: "₺182K", trend: "+67%" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-left">
                    <div className="text-xs text-on-surface-variant mb-1">{stat.label}</div>
                    <div className="text-xl font-bold text-on-surface">{stat.value}</div>
                    <div className="text-xs text-green-400 mt-1">{stat.trend}</div>
                  </div>
                ))}
                <div className="col-span-3 glass rounded-xl p-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-xs text-on-surface-variant">Otomasyon Akışı</span>
                    <span className="text-xs text-primary">Canlı</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {["WhatsApp", "→", "AI", "→", "CRM", "→", "E-posta"].map((node, i) => (
                      <div key={i} className={node === "→" ? "text-on-surface-variant text-xs" : "glass rounded-lg px-3 py-1.5 text-xs text-on-surface flex items-center gap-1"}>
                        {node !== "→" && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
