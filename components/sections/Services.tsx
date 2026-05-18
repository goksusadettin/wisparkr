"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Target, GitBranch, Bot, Mail, BarChart3 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  MessageSquare, Target, GitBranch, Bot, Mail, BarChart3,
};

const COLOR_CLASSES: Record<string, { icon: string; bg: string; hover: string }> = {
  primary: { icon: "text-primary", bg: "bg-primary/10", hover: "group-hover:border-primary/30" },
  secondary: { icon: "text-secondary", bg: "bg-secondary/10", hover: "group-hover:border-secondary/30" },
  tertiary: { icon: "text-tertiary", bg: "bg-tertiary/10", hover: "group-hover:border-tertiary/30" },
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
          const colors = COLOR_CLASSES[service.color] ?? COLOR_CLASSES.primary;
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
                className={`group relative glass p-8 rounded-3xl border border-white/5 ${colors.hover} hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.icon} mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-[22px] font-semibold text-on-surface mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-body-md text-on-surface-variant relative z-10">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
