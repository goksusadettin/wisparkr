import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Çalışmalarımız",
  description: "Wisparkr'ın tamamladığı otomasyon projeleri ve başarı hikayeleri.",
};

const PROJECTS = [
  {
    title: "E-Ticaret Sipariş Otomasyonu",
    client: "TechStore",
    category: "E-Ticaret",
    result: "%40 operasyonel yük azalması",
    description:
      "Sipariş yönetimi, stok takibi ve müşteri bildirimlerini tamamen otomatikleştirdik. Manuel işlemler sıfıra indi.",
    color: "primary",
  },
  {
    title: "WhatsApp Müşteri Hizmetleri Botu",
    client: "Modafy",
    category: "AI Chatbot",
    result: "7/24 kesintisiz destek",
    description:
      "GPT-4 tabanlı chatbot ile gece gelen müşteri talepleri anında yanıtlanıyor, satışa dönüşüm oranı arttı.",
    color: "secondary",
  },
  {
    title: "CRM & Lead Otomasyon Sistemi",
    client: "LogiSim",
    category: "CRM Entegrasyonu",
    result: "3x daha hızlı lead takibi",
    description:
      "HubSpot entegrasyonu ile gelen leadler otomatik puanlanıyor, doğru temsilciye anında atanıyor.",
    color: "tertiary",
  },
  {
    title: "E-posta Pazarlama Otomasyonu",
    client: "Novatel",
    category: "Email Otomasyon",
    result: "%65 açılma oranı artışı",
    description:
      "Kullanıcı davranışına göre tetiklenen kişiselleştirilmiş e-posta serileri ile müşteri bağlılığı ve satış oranları ciddi ölçüde arttı.",
    color: "primary",
  },
  {
    title: "Instagram & WhatsApp Lead Toplama",
    client: "Deskflow",
    category: "Lead Yönetimi",
    result: "2x daha fazla nitelikli lead",
    description:
      "Sosyal medya reklamlarından gelen ziyaretçiler otomatik lead formlarıyla yakalanıp CRM'e aktarıldı.",
    color: "secondary",
  },
  {
    title: "Müşteri Destek Chatbot Entegrasyonu",
    client: "Arconex",
    category: "AI Chatbot",
    result: "%80 destek maliyeti düşüşü",
    description:
      "Sık sorulan sorular, sipariş takibi ve iade süreçleri tamamen otomatikleştirildi. Destek ekibinin yükü dramatik biçimde azaldı.",
    color: "tertiary",
  },
];

const COLOR_CLASSES: Record<string, { badge: string; dot: string }> = {
  primary: { badge: "bg-primary/10 text-primary", dot: "bg-primary" },
  secondary: { badge: "bg-secondary/10 text-secondary", dot: "bg-secondary" },
  tertiary: { badge: "bg-tertiary/10 text-tertiary", dot: "bg-tertiary" },
};

export default function CalismalarimizPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="relative overflow-hidden py-20 px-gutter text-center mb-12">
        <div className="glow-sphere w-[400px] h-[400px] bg-tertiary top-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-container-max mx-auto">
          <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">
            Portfolyo
          </span>
          <h1 className="text-h1-mobile md:text-h2 text-on-surface mb-6">
            Gerçek Projeler,{" "}
            <span className="gradient-text">Gerçek Sonuçlar</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Müşterilerimiz için hayata geçirdiğimiz otomasyon projelerinden bazıları.
          </p>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter space-y-8">
        {PROJECTS.map((project) => {
          const colors = COLOR_CLASSES[project.color];
          return (
            <div
              key={project.title}
              className="glass rounded-3xl border border-white/5 p-8 md:p-10 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-label-sm px-3 py-1 rounded-full ${colors.badge}`}>
                      {project.category}
                    </span>
                    <span className="text-label-sm text-on-surface-variant">{project.client}</span>
                  </div>
                  <h2 className="text-h2-mobile text-on-surface mb-3">{project.title}</h2>
                  <p className="text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="glass rounded-2xl border border-white/5 p-6 text-center shrink-0 md:w-48">
                  <div className={`w-2 h-2 rounded-full ${colors.dot} mx-auto mb-3`} />
                  <div className="text-on-surface font-semibold text-sm leading-snug">{project.result}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 mt-20">
          <div className="glow-sphere w-[400px] h-[400px] bg-primary/20 -top-1/2 left-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-6">
              Sıradaki Başarı Hikayesi Sizin Olsun
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
              İşletmenize özel otomasyon çözümü için hemen görüşelim.
            </p>
            <Link href="/iletisim" className="btn-primary inline-flex items-center gap-2 px-10 py-4">
              Ücretsiz Görüşme Al
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
