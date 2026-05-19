"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Target, GitBranch, Bot, Mail, BarChart3 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  MessageSquare, Target, GitBranch, Bot, Mail, BarChart3,
};

const CARD_STYLES: Record<string, {
  icon: string;
  bg: string;
  hover: string;
  gradient: string;
  illustration: React.ReactNode;
}> = {
  primary: {
    icon: "text-primary",
    bg: "bg-primary/10",
    hover: "group-hover:border-primary/30",
    gradient: "from-primary/20 via-primary/5 to-transparent",
    illustration: (
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 160 160" fill="none">
        <circle cx="120" cy="120" r="80" stroke="url(#g1)" strokeWidth="1.5" />
        <circle cx="120" cy="120" r="55" stroke="url(#g1)" strokeWidth="1" />
        <circle cx="120" cy="120" r="30" stroke="url(#g1)" strokeWidth="1" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  secondary: {
    icon: "text-secondary",
    bg: "bg-secondary/10",
    hover: "group-hover:border-secondary/30",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
    illustration: (
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 160 160" fill="none">
        <rect x="60" y="60" width="80" height="80" rx="12" stroke="url(#g2)" strokeWidth="1.5" transform="rotate(-15 80 80)" />
        <rect x="70" y="70" width="60" height="60" rx="8" stroke="url(#g2)" strokeWidth="1" transform="rotate(-15 80 80)" />
        <rect x="82" y="82" width="36" height="36" rx="5" stroke="url(#g2)" strokeWidth="1" transform="rotate(-15 80 80)" />
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  tertiary: {
    icon: "text-tertiary",
    bg: "bg-tertiary/10",
    hover: "group-hover:border-tertiary/30",
    gradient: "from-tertiary/20 via-tertiary/5 to-transparent",
    illustration: (
      <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity" viewBox="0 0 160 160" fill="none">
        <polygon points="80,20 140,140 20,140" stroke="url(#g3)" strokeWidth="1.5" />
        <polygon points="80,45 120,125 40,125" stroke="url(#g3)" strokeWidth="1" />
        <polygon points="80,70 100,110 60,110" stroke="url(#g3)" strokeWidth="1" />
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-section-gap px-gutter max-w-container-max mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">
          Dijital Gücünüzü Serbest Bırakın
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Otomasyonun her aşamasında yanınızdayız.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon] ?? Bot;
          const styles = CARD_STYLES[service.color] ?? CARD_STYLES.primary;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/hizmetler#${service.id}`}
                className={`group relative glass p-8 rounded-3xl border border-white/5 ${styles.hover} hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden`}
              >
                {/* Gradient arka plan */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />

                {/* Dekoratif illustration */}
                {styles.illustration}

                {/* İkon */}
                <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center ${styles.icon} mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <Icon size={22} />
                </div>

                {/* İçerik */}
                <h3 className="text-[22px] font-semibold text-on-surface mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-body-md text-on-surface-variant relative z-10">
                  {service.description}
                </p>

                {/* Alt çizgi efekti */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${styles.gradient} rounded-full`} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
