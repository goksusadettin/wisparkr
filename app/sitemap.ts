import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://wisparkr.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://wisparkr.com/hizmetler", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://wisparkr.com/hakkimizda", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://wisparkr.com/calismalarimiz", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://wisparkr.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://wisparkr.com/iletisim", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://wisparkr.com/gizlilik", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://wisparkr.com/kvkk", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://wisparkr.com/blog/whatsapp-otomasyon-nedir", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://wisparkr.com/blog/yapay-zeka-chatbot-kurulum-rehberi", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://wisparkr.com/blog/crm-entegrasyonu-kucuk-isletmeler", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://wisparkr.com/blog/lead-yonetimi-otomasyon", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://wisparkr.com/blog/eposta-otomasyon-kampanyalari", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://wisparkr.com/blog/is-akisi-otomasyonu-baslangic", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
