import { MessageSquare, Target, GitBranch, Bot, Mail, BarChart3, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Wisparkr yapay zeka otomasyon hizmetleri: WhatsApp Otomasyonu, AI Chatbot, CRM Entegrasyonu, Lead Yakalama ve daha fazlası.",
};

const ICONS: Record<string, React.ElementType> = {
  MessageSquare, Target, GitBranch, Bot, Mail, BarChart3,
};

const COLOR_CLASSES: Record<string, { icon: string; bg: string; border: string; glow: string }> = {
  primary: { icon: "text-primary", bg: "bg-primary/10", border: "border-primary/30", glow: "shadow-[0_0_30px_rgba(173,198,255,0.1)]" },
  secondary: { icon: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/30", glow: "shadow-[0_0_30px_rgba(208,188,255,0.1)]" },
  tertiary: { icon: "text-tertiary", bg: "bg-tertiary/10", border: "border-tertiary/30", glow: "shadow-[0_0_30px_rgba(76,215,246,0.1)]" },
};

export default function HizmetlerPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="relative overflow-hidden py-20 px-gutter text-center mb-12">
        <div className="glow-sphere w-[400px] h-[400px] bg-primary top-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-container-max mx-auto">
          <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">Hizmetler</span>
          <h1 className="text-h1-mobile md:text-h2 text-on-surface mb-4">
            Dijital Gücünüzü{" "}
            <span className="gradient-text">Serbest Bırakın</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            İşletmenizin her sürecini akıllı otomasyonla dönüştürüyoruz.
          </p>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter space-y-20">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon] ?? Bot;
          const colors = COLOR_CLASSES[service.color] ?? COLOR_CLASSES.primary;
          const isEven = i % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 scroll-mt-24`}
            >
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.icon} mb-6`}>
                  <Icon size={28} />
                </div>
                <h2 className="text-h2-mobile text-on-surface mb-4">{service.title}</h2>
                <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">{service.detail}</p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  Bu Hizmet İçin Görüşme Al
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`flex-1 glass rounded-3xl p-8 border ${colors.border} ${colors.glow}`}>
                <h3 className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">
                  Özellikler
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center shrink-0`}>
                        <Check size={12} className={colors.icon} />
                      </div>
                      <span className="text-body-md text-on-surface">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-32">
        <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10">
          <div className="glow-sphere w-[500px] h-[500px] bg-primary/20 -top-1/2 left-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-6">
              Hangi Hizmet Size Uygun?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
              30 dakikalık ücretsiz görüşmede işletmenize özel çözümü birlikte belirleyelim.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block px-10 py-4">
              Ücretsiz Görüşme Al
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
