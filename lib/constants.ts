export const SITE_NAME = "Wisparkr";
export const SITE_DESCRIPTION =
  "Yapay Zeka Otomasyon Ajansı. Geleceği kodluyor, işletmeleri özgürleştiriyoruz.";
export const SITE_URL = "https://wisparkr.com";

export const CONTACT = {
  email: "info@wisparkr.com",
  whatsapp: "+905311053295",
  whatsappLink: "https://wa.me/905311053295?text=Merhaba%2C%20Wisparkr%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  phone: "+90 531 105 32 95",
  phoneLink: "tel:+905311053295",
  location: "İstanbul, Türkiye",
  emailLink: "mailto:info@wisparkr.com",
};

export const SOCIAL = {
  instagram: "https://instagram.com/wisparkr",
  linkedin: "https://www.linkedin.com/company/122353984/",
  twitter: "https://x.com/wisparkr45828",
  youtube: "https://youtube.com/@wisparkr",
};

export const NAV_LINKS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Çalışmalarımız", href: "/calismalarimiz" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const SERVICES = [
  {
    id: "whatsapp",
    title: "WhatsApp Otomasyonu",
    description: "Müşterilerinizle 7/24 kesintisiz iletişim kurun, randevuları ve siparişleri otomatikleştirin.",
    icon: "MessageSquare",
    color: "primary",
    detail: "WhatsApp Business API entegrasyonu ile gelen mesajları otomatik yanıtlayın, akıllı yönlendirme yapın ve müşteri memnuniyetini artırın. Randevu, sipariş ve destek talepleriniz artık 7/24 kendiliğinden yönetilir.",
    features: ["Otomatik mesaj yanıtlama", "Akıllı yönlendirme", "Randevu takibi", "Sipariş bildirimleri", "Çoklu dil desteği"],
  },
  {
    id: "lead",
    title: "Lead Yakalama",
    description: "Potansiyel müşterileri anında yakalayın ve onları doğru satış temsilcisine yönlendirin.",
    icon: "Target",
    color: "secondary",
    detail: "Web sitenize gelen ziyaretçileri akıllı formlar ve chatbot ile potansiyel müşteriye dönüştürün. Otomatik puanlama sistemi ile en değerli leadleri önceliklendirir, satış ekibinize anında bildirir.",
    features: ["Akıllı form optimizasyonu", "Lead puanlama", "Otomatik CRM girişi", "Satış bildirimleri", "A/B test desteği"],
  },
  {
    id: "crm",
    title: "CRM Entegrasyonu",
    description: "Kullandığınız tüm araçları birbiriyle konuşturun. Veri kaybına son verin.",
    icon: "GitBranch",
    color: "tertiary",
    detail: "Salesforce, HubSpot, Pipedrive ve 500+ uygulama ile çift yönlü senkronizasyon. Verileriniz her sistemde anlık olarak güncellenir, hiçbir bilgi kaybolmaz.",
    features: ["500+ entegrasyon", "Çift yönlü senkronizasyon", "Veri temizleme", "Otomatik güncelleme", "Özel API desteği"],
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    description: "Gelişmiş doğal dil işleme ile müşterilerinize insansı bir deneyim sunun.",
    icon: "Bot",
    color: "primary",
    detail: "GPT-4 tabanlı chatbot altyapımız, işletmenize özel eğitilerek müşteri niyetini anlayan, bağlamı koruyan ve satışa yönlendiren akıllı konuşmalar kurar.",
    features: ["GPT-4 altyapısı", "İşletmeye özel eğitim", "Çok dil desteği", "Satış yönlendirme", "Analitik dashboard"],
  },
  {
    id: "email",
    title: "E-posta Otomasyonu",
    description: "Kişiselleştirilmiş kampanya ve bilgilendirme maillerini otomatik olarak gönderin.",
    icon: "Mail",
    color: "secondary",
    detail: "Davranış tabanlı tetikleyiciler ile doğru kişiye, doğru anda, doğru içeriği gönderin. Açılma oranlarınızı ve dönüşümlerinizi katlamak için A/B testleri ve akıllı segmentasyon kullanın.",
    features: ["Davranış tetikleyicileri", "A/B testi", "Gelişmiş segmentasyon", "Kişiselleştirme", "Performans raporları"],
  },
  {
    id: "analytics",
    title: "Süreç Analizi",
    description: "Hangi süreçlerin tıkandığını görün ve AI önerileriyle optimize edin.",
    icon: "BarChart3",
    color: "tertiary",
    detail: "Tüm iş süreçlerinizi gerçek zamanlı izleyin. Darboğazları tespit edin, yapay zeka destekli optimizasyon önerileri alın ve karar verme hızınızı katlayın.",
    features: ["Gerçek zamanlı dashboard", "Darboğaz tespiti", "AI optimizasyon önerileri", "Özel rapor oluşturucu", "Trend analizi"],
  },
];

export const TRUSTED_BRANDS = ["BUILDPRO", "BITWISE", "SYNCFORGE", "WAVE", "CORESAGE"];

export const PRICING = [
  {
    id: "starter",
    name: "Başlangıç",
    price: "₺4.999",
    period: "tek seferlik",
    features: ["Temel WhatsApp Bot", "1 Entegrasyon", "E-posta Desteği"],
    cta: "Seç",
    highlight: false,
  },
  {
    id: "pro",
    name: "Profesyonel",
    price: "₺12.999",
    period: "/ay",
    features: ["Gelişmiş AI Chatbot", "Sınırsız Entegrasyon", "7/24 Öncelikli Destek", "Süreç Analitiği Paneli"],
    cta: "Hemen Başla",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    price: "Özel",
    period: "fiyat",
    features: ["Custom API Geliştirme", "Özel Account Manager", "On-premise Kurulum"],
    cta: "İletişime Geç",
    highlight: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Otomasyon kurulumu ne kadar sürer?",
    answer: "Projenin kapsamına göre değişmekle birlikte, basit otomasyon kurulumları 1-2 hafta, karmaşık entegrasyonlar ise 3-6 hafta arasında tamamlanmaktadır. İlk görüşmede size net bir zaman çizelgesi sunuyoruz.",
  },
  {
    question: "Hangi sistemlerle entegre olabiliyorsunuz?",
    answer: "Shopify, WooCommerce, Salesforce, HubSpot, Notion, Airtable, Slack, Microsoft Teams, Google Workspace, Zapier ve 500'den fazla uygulama ile entegrasyon sağlıyoruz. Özel API entegrasyonları da yapıyoruz.",
  },
  {
    question: "Yapay zeka chatbotları müşteriyi anlayabiliyor mu?",
    answer: "Evet. Geliştirdiğimiz chatbotlar, GPT-4 tabanlı olup doğal dil işleme teknolojisiyle müşteri niyetini anlıyor, bağlamı koruyor ve işletmenize özel eğitilmiş yanıtlar veriyor.",
  },
  {
    question: "Veri güvenliği nasıl sağlanıyor?",
    answer: "Tüm veriler SSL şifreleme ile korunmakta, GDPR ve KVKK uyumlu altyapı kullanılmaktadır. Verileriniz yalnızca sizin belirlediğiniz sunucularda saklanır, üçüncü taraflarla paylaşılmaz.",
  },
  {
    question: "Maliyetler neye göre değişiyor?",
    answer: "Fiyatlandırma; ihtiyaç duyulan otomasyon sayısı, entegrasyon karmaşıklığı ve destek seviyesine göre belirleniyor. Ücretsiz keşif görüşmesinde size özel teklif hazırlıyoruz.",
  },
  {
    question: "Kurulum sonrası destek veriyor musunuz?",
    answer: "Evet, tüm paketlerimizde kurulum sonrası destek dahildir. 7/24 teknik destek, aylık bakım güncellemeleri ve performans raporları ile yanınızdayız.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Wisparkr ile operasyonel yükümüz %40 azaldı. Artık ekibimiz sadece stratejik işlere vakit ayırabilmektedir.",
    name: "Ahmet Yılmaz",
    title: "CEO, TechStore",
  },
  {
    quote: "Müşteri hizmetleri botumuz sayesinde gece gelen talepler bile anında cevaplanıyor. Satışlarımız arttı.",
    name: "Elif Kaya",
    title: "Pazarlama Müdürü, Modafy",
  },
  {
    quote: "Entegrasyonlar o kadar hızlı kuruldu ki şaşırdık. Teknik ekibe ihtiyaç duymadan süreci yönettiler.",
    name: "Can Demir",
    title: "Kurucu, LogiSim",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Keşif",
    description: "Mevcut süreçlerinizi analiz eder ve otomasyon potansiyelini birlikte belirleriz.",
    color: "primary",
  },
  {
    step: "02",
    title: "Kurulum",
    description: "Size özel akışları tasarlar, test eder ve sistemlerinize entegre ederiz.",
    color: "secondary",
  },
  {
    step: "03",
    title: "Büyüme",
    description: "Sistemleriniz çalışırken siz verimlilik artışının ve büyümenin tadını çıkarın.",
    color: "primary",
  },
];
