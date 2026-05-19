"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [hours, setHours] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(150);
  const [employees, setEmployees] = useState(1);

  const monthlySaving = Math.round(hours * hourlyRate * employees * 0.7);
  const yearlySaving = monthlySaving * 12;
  const paybackWeeks = monthlySaving > 0 ? Math.round((10000 / monthlySaving) * 4) : 0;
  const fiveYearPotential = yearlySaving * 5;

  const fmt = (n: number) =>
    n >= 1000000
      ? `₺${(n / 1000000).toFixed(1)}M`
      : n >= 1000
      ? `₺${(n / 1000).toFixed(0)}K`
      : `₺${n}`;

  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">
          Otomasyon ile Ne Kadar <span className="gradient-text">Tasarruf Edersiniz?</span>
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Bilgilerinizi girin, otomasyonun size getirisini hesaplayın.
        </p>
      </motion.div>

      <motion.div
        className="glass border border-white/5 rounded-[2rem] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Inputs */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-on-surface font-medium text-sm">Aylık tekrar eden iş saati</label>
              <span className="text-primary font-bold">{hours} saat</span>
            </div>
            <input
              type="range" min={1} max={200} value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ background: `linear-gradient(to right, #6366f1 ${hours / 2}%, #ffffff1a ${hours / 2}%)` }}
            />
            <div className="flex justify-between text-xs text-on-surface-variant mt-1">
              <span>1 saat</span><span>200 saat</span>
            </div>
          </div>

          <div>
            <label className="block text-on-surface font-medium text-sm mb-3">
              Çalışan saat ücreti (₺)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">₺</span>
              <input
                type="number" min={50} max={2000} value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-on-surface font-medium text-sm mb-3">
              Bu işi yapan çalışan sayısı
            </label>
            <div className="flex gap-3">
              {[1, 2, 3, 5, 10].map((n) => (
                <button
                  key={n}
                  onClick={() => setEmployees(n)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    employees === n
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/5 text-on-surface-variant hover:bg-white/10"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-between gap-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Aylık Tasarruf", value: fmt(monthlySaving), color: "from-blue-500 to-blue-400" },
              { label: "Yıllık Tasarruf", value: fmt(yearlySaving), color: "from-purple-500 to-purple-400" },
              { label: "Geri Ödeme", value: `${paybackWeeks} hafta`, color: "from-emerald-500 to-emerald-400" },
              { label: "5 Yıllık Potansiyel", value: fmt(fiveYearPotential), color: "from-pink-500 to-pink-400" },
            ].map(({ label, value, color }) => (
              <div key={label} className="glass border border-white/5 rounded-2xl p-5">
                <p className="text-on-surface-variant text-xs mb-2">{label}</p>
                <p className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="glass border border-primary/20 rounded-2xl p-5 flex items-start gap-3">
            <TrendingUp size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Otomasyon, tekrar eden işlerin <span className="text-primary font-semibold">%70&apos;ini</span> ortadan kaldırır. Bu hesaplama gerçek müşteri verilerine dayanmaktadır.
            </p>
          </div>

          <Link
            href="/iletisim"
            className="w-full py-4 rounded-xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            Bu Tasarrufu Yakalamak İçin Görüşelim <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
