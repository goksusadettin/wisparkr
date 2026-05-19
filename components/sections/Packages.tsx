"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    id: "baslangic",
    name: "Başlangıç Paketi",
    features: [
      "1 iş akışı otomasyonu",
      "Temel sistem entegrasyonu",
      "30 gün destek",
      "Kullanıcı eğitimi",
      "Detaylı dokümantasyon",
    ],
    highlight: false,
    badge: null,
  },
  {
    id: "profesyonel",
    name: "Profesyonel Paket",
    features: [
      "3-5 iş akışı otomasyonu",
      "Tüm sistem entegrasyonları",
      "3 ay destek + bakım",
      "Aylık optimizasyon raporu",
      "Öncelikli destek",
      "WhatsApp + AI Chatbot",
    ],
    highlight: true,
    badge: "POPÜLER",
  },
  {
    id: "kurumsal",
    name: "Kurumsal Paket",
    features: [
      "Sınırsız otomasyon",
      "Özel geliştirme",
      "Dedikli proje yöneticisi",
      "7/24 öncelikli destek",
      "Aylık strateji görüşmesi",
      "SLA garantisi",
    ],
    highlight: false,
    badge: null,
  },
];

export default function Packages() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-label-sm text-on-surface-variant/60 tracking-widest uppercase mb-3">
          Her projeye özel teklif. Bütçenize göre çözüm sunuyoruz.
        </p>
        <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">Çözüm Paketleri</h2>
        <p className="text-body-md text-on-surface-variant">İhtiyacınıza uygun paketi seçin, fiyat birlikte belirleyelim.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-16">
        {PACKAGES.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={
              pkg.highlight
                ? "relative p-8 rounded-[2rem] flex flex-col gradient-border shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-10 bg-surface"
                : "glass p-8 rounded-[2rem] border border-white/5 flex flex-col"
            }
          >
            {pkg.badge && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[11px] px-4 py-1 rounded-full uppercase tracking-widest">
                {pkg.badge}
              </div>
            )}

            <h4 className="text-[22px] font-semibold text-on-surface mb-8">{pkg.name}</h4>

            <ul className="space-y-4 mb-10 flex-1">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-body-md text-on-surface-variant">
                  <Check size={16} className={pkg.highlight ? "text-secondary shrink-0" : "text-primary shrink-0"} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`/iletisim?paket=${pkg.id}`}
              className={
                pkg.highlight
                  ? "w-full py-4 rounded-xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
                  : "w-full py-4 rounded-xl font-bold text-center border border-white/10 text-on-surface hover:bg-white/5 transition-all"
              }
            >
              Görüşmeye Başla
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-on-surface-variant text-sm mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Hangi paket size uygun? 30 dakikalık ücretsiz keşif görüşmesinde birlikte belirleyelim.
      </motion.p>
    </section>
  );
}
