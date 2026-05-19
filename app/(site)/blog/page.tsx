import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yapay zeka otomasyon, WhatsApp botları, CRM entegrasyonu ve dijital dönüşüm hakkında ipuçları ve rehberler.",
};

const POSTS = [
  {
    slug: "whatsapp-otomasyon-nedir",
    title: "WhatsApp Otomasyonu Nedir? İşletmenize Nasıl Katkı Sağlar?",
    excerpt: "WhatsApp'ı sadece mesajlaşma aracı olarak kullanıyorsanız büyük bir fırsatı kaçırıyorsunuz. Otomasyon ile 7/24 müşteri hizmeti, otomatik sipariş bildirimi ve lead takibi nasıl yapılır?",
    category: "WhatsApp",
    readTime: "5 dk",
    date: "15 Mayıs 2025",
    color: "primary",
  },
  {
    slug: "yapay-zeka-chatbot-kurulum-rehberi",
    title: "Yapay Zeka Chatbot Kurulum Rehberi: Adım Adım GPT Entegrasyonu",
    excerpt: "Web sitenize veya WhatsApp hattınıza GPT tabanlı bir chatbot entegre etmek için ihtiyacınız olan her şey bu rehberde. Teknik bilgi gerektirmiyor.",
    category: "AI Chatbot",
    readTime: "8 dk",
    date: "8 Mayıs 2025",
    color: "secondary",
  },
  {
    slug: "crm-entegrasyonu-kucuk-isletmeler",
    title: "Küçük İşletmeler İçin CRM Entegrasyonu: HubSpot vs Zoho vs Pipedrive",
    excerpt: "Hangi CRM sistemi işletmenize uygun? Maliyetler, özellikler ve otomasyon kapasiteleri açısından en popüler 3 CRM platformunu karşılaştırdık.",
    category: "CRM",
    readTime: "6 dk",
    date: "1 Mayıs 2025",
    color: "tertiary",
  },
  {
    slug: "lead-yonetimi-otomasyon",
    title: "Lead Yönetimini Otomatikleştirin: Daha Az Çabayla Daha Fazla Satış",
    excerpt: "Her gün gelen potansiyel müşterileri takip etmek için saatler harcıyor musunuz? Otomasyon ile leadleri puanlandırma, atama ve takip etme süreçlerini sıfır manuel çalışmayla yönetin.",
    category: "Lead Yönetimi",
    readTime: "7 dk",
    date: "22 Nisan 2025",
    color: "primary",
  },
  {
    slug: "eposta-otomasyon-kampanyalari",
    title: "E-posta Otomasyon Kampanyaları ile Müşteri Bağlılığını Artırın",
    excerpt: "Toplu e-posta göndermek artık yeterli değil. Davranışa dayalı kişiselleştirilmiş e-posta serileri ile açılma oranlarını nasıl ikiye katlarsınız?",
    category: "E-posta",
    readTime: "5 dk",
    date: "14 Nisan 2025",
    color: "secondary",
  },
  {
    slug: "is-akisi-otomasyonu-baslangic",
    title: "İş Akışı Otomasyonuna Başlamak İçin 5 Kolay Adım",
    excerpt: "Otomasyon karmaşık değil. İşletmenizde en çok zaman alan tekrarlayan görevleri tespit edip bunları otomatikleştirmeye nereden başlayacağınızı anlattık.",
    category: "Otomasyon",
    readTime: "4 dk",
    date: "5 Nisan 2025",
    color: "tertiary",
  },
];

const COLOR_CLASSES: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden py-20 px-gutter text-center mb-12">
        <div className="glow-sphere w-[400px] h-[400px] bg-secondary top-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-container-max mx-auto">
          <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">Blog</span>
          <h1 className="text-h1-mobile md:text-h2 text-on-surface mb-6">
            Otomasyon Dünyasından{" "}
            <span className="gradient-text">Rehberler & İpuçları</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Yapay zeka, chatbot, CRM ve iş akışı otomasyonu hakkında pratik içerikler.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass border border-white/5 rounded-3xl p-6 hover:border-primary/20 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-label-sm px-3 py-1 rounded-full ${COLOR_CLASSES[post.color]}`}>
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-on-surface-variant text-xs">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-on-surface font-semibold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-xs">{post.date}</span>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Oku <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
