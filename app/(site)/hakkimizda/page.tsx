import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Wisparkr hakkında — misyonumuz, vizyonumuz ve ekibimiz.",
};

const VALUES = [
  {
    icon: Target,
    title: "Misyon",
    description:
      "İşletmelerin tekrar eden süreçlerini yapay zeka ile otomatikleştirerek insan enerjisini yaratıcı ve stratejik işlere yönlendirmek.",
  },
  {
    icon: Eye,
    title: "Vizyon",
    description:
      "Türkiye'nin en güvenilir yapay zeka otomasyon ajansı olarak, her ölçekteki işletmenin dijital dönüşümüne öncülük etmek.",
  },
  {
    icon: Heart,
    title: "Değerler",
    description:
      "Şeffaflık, sürekli öğrenme ve müşteri odaklılık. Her projede uzun vadeli değer yaratmayı önceliklendiriyoruz.",
  },
];

const STATS = [
  { value: "%40", label: "Ortalama Operasyonel Yük Azalması" },
  { value: "7/24", label: "Kesintisiz Sistem Çalışması" },
  { value: "500+", label: "Desteklenen Entegrasyon" },
  { value: "2 Hft", label: "Ortalama Kurulum Süresi" },
];

export default function HakkimizdaPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="relative overflow-hidden py-20 px-gutter text-center mb-12">
        <div className="glow-sphere w-[500px] h-[500px] bg-secondary top-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-container-max mx-auto">
          <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">
            Hakkımızda
          </span>
          <h1 className="text-h1-mobile md:text-h2 text-on-surface mb-6">
            Geleceği Kodluyor,{" "}
            <span className="gradient-text">İşletmeleri Özgürleştiriyoruz</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Wisparkr, yapay zeka ve otomasyon teknolojilerini kullanarak işletmelerin
            verimliliğini katlayan bir dijital otomasyon ajansıdır.
          </p>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter space-y-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center border border-white/5">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-label-sm text-on-surface-variant">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">
              Hikayemiz
            </span>
            <h2 className="text-h2-mobile text-on-surface mb-6">
              Neden Wisparkr?
            </h2>
            <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed">
              <p>
                Wisparkr, işletmelerin günlük operasyonlarında harcadığı zamanı ve enerjiyi
                gözlemleyerek kuruldu. Tekrar eden görevler, manuel veri girişleri ve kopuk
                sistemler — bunların hepsi çözülebilir problemlerdi.
              </p>
              <p>
                Yapay zeka ve otomasyon teknolojilerini kullanarak bu problemleri ortadan
                kaldırıyor, ekiplerin gerçekten değer üretebileceği işlere odaklanmasını
                sağlıyoruz.
              </p>
              <p>
                Bugün, farklı sektörlerden onlarca işletmenin otomasyon yolculuğuna eşlik
                ediyoruz. Her projeyi uzun vadeli bir ortaklık olarak görüyor, sistemleri
                sadece kurmuyor — büyütüyoruz.
              </p>
            </div>
          </div>
          <div className="glass rounded-3xl border border-white/5 p-8 space-y-4">
            {[
              "WhatsApp ve mesajlaşma otomasyonu",
              "Yapay zeka destekli müşteri hizmetleri",
              "CRM ve iş akışı entegrasyonları",
              "Veri analitiği ve raporlama",
              "E-ticaret süreç otomasyonu",
              "Özel API geliştirme",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-body-md text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glass rounded-3xl border border-white/5 p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="text-[22px] font-semibold text-on-surface mb-3">{title}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10">
          <div className="glow-sphere w-[500px] h-[500px] bg-primary/20 -top-1/2 left-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-6">
              Birlikte Büyüyelim
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
              İşletmenizin otomasyon potansiyelini keşfetmek için 30 dakikalık ücretsiz görüşme alın.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-2 px-10 py-4"
            >
              Görüşme Talep Et
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
