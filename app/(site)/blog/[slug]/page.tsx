import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

const POSTS: Record<string, {
  title: string; category: string; readTime: string; date: string;
  description: string; content: string[];
}> = {
  "whatsapp-otomasyon-nedir": {
    title: "WhatsApp Otomasyonu Nedir? İşletmenize Nasıl Katkı Sağlar?",
    category: "WhatsApp",
    readTime: "5 dk",
    date: "15 Mayıs 2025",
    description: "WhatsApp'ı sadece mesajlaşma aracı olarak kullanıyorsanız büyük bir fırsatı kaçırıyorsunuz.",
    content: [
      "Türkiye'de aktif WhatsApp kullanıcı sayısı 50 milyonu aşmış durumda. İşletmeler için bu, müşterilerine en kolay ulaşabileceği platform demek. Ancak çoğu işletme WhatsApp'ı sadece manuel mesajlaşma için kullanıyor.",
      "WhatsApp otomasyonu ile neler yapabilirsiniz? Sipariş onayı ve kargo takip bildirimleri, randevu hatırlatmaları, sık sorulan soruların otomatik yanıtlanması, lead formu doldururken anlık mesaj, kampanya ve indirim duyuruları bunların başında geliyor.",
      "Bunların tümünü 7/24 ve insan müdahalesi olmadan yapabilirsiniz. Müşteriniz gece 2'de sipariş verse bile anında onay mesajı alır.",
      "WhatsApp Business API kullanarak entegrasyon yapıyoruz. Bu sayede tek numaradan binlerce mesaj gönderilebiliyor, konuşmalar CRM'e aktarılabiliyor ve chatbot ile desteklenebiliyor.",
      "Kurulum süreci ortalama 3-5 iş günü. İşletmenizin büyüklüğüne ve entegrasyon gereksinimlerine göre değişiklik gösterebilir.",
    ],
  },
  "yapay-zeka-chatbot-kurulum-rehberi": {
    title: "Yapay Zeka Chatbot Kurulum Rehberi: Adım Adım GPT Entegrasyonu",
    category: "AI Chatbot",
    readTime: "8 dk",
    date: "8 Mayıs 2025",
    description: "Web sitenize veya WhatsApp hattınıza GPT tabanlı bir chatbot entegre etmek için ihtiyacınız olan her şey.",
    content: [
      "GPT tabanlı chatbotlar artık sadece büyük şirketlerin değil, her ölçekteki işletmenin kullanabileceği araçlar haline geldi. Doğru kurulumla müşteri memnuniyetini artırırken destek maliyetlerini ciddi ölçüde düşürebilirsiniz.",
      "Adım 1: Chatbotunuzun kapsamını belirleyin. Hangi soruları yanıtlayacak? Hangi konularda insan desteğine yönlendirecek? Bu sınırları net çizmek, chatbotun etkinliğini doğrudan etkiler.",
      "Adım 2: Şirket bilgilerinizi ve SSS içeriklerinizi hazırlayın. Chatbot bu verileri öğrenerek müşterilerinize doğru yanıtlar verecek. Ne kadar kapsamlı bir bilgi tabanı hazırlarsanız chatbot o kadar akıllı davranır.",
      "Adım 3: Entegrasyon kanalını seçin. Web sitesi, WhatsApp, Instagram veya hepsi birden olabilir. Her kanal farklı teknik gereksinimler içerir.",
      "Adım 4: Test ve optimizasyon. Gerçek kullanıcı sorularıyla chatbotu test edin, yanlış yanıtları düzeltin ve performansı sürekli takip edin.",
      "Wisparkr olarak bu sürecin tamamını sizin adınıza yönetiyoruz. Siz sadece işinize odaklanın.",
    ],
  },
  "crm-entegrasyonu-kucuk-isletmeler": {
    title: "Küçük İşletmeler İçin CRM Entegrasyonu: HubSpot vs Zoho vs Pipedrive",
    category: "CRM",
    readTime: "6 dk",
    date: "1 Mayıs 2025",
    description: "Hangi CRM sistemi işletmenize uygun? En popüler 3 CRM platformunu karşılaştırdık.",
    content: [
      "CRM (Müşteri İlişkileri Yönetimi) sistemi seçmek, işletmenizin satış süreçlerini doğrudan etkiler. Yanlış seçim hem zaman hem para kaybına yol açar.",
      "HubSpot: Ücretsiz planı oldukça kapsamlı. Küçük ve orta ölçekli işletmeler için ideal başlangıç noktası. E-posta pazarlama, pipeline yönetimi ve temel raporlama ücretsiz. Büyüdükçe fiyat artar.",
      "Zoho CRM: Fiyat-performans açısından en güçlü seçenek. Özellikle 10+ kişilik satış ekipleri için ideal. Otomasyon kapasitesi yüksek, API entegrasyonları esnek.",
      "Pipedrive: Satış odaklı ekipler için tasarlanmış. Görsel pipeline yönetimi sayesinde ekibin hangi aşamada ne kadar iş olduğunu anlık takip edebilirsiniz.",
      "Bizim önerimiz: 1-5 kişilik ekipler için HubSpot ücretsiz plan, 5-20 kişilik ekipler için Zoho, 20+ kişilik satış ekipleri için Pipedrive veya HubSpot Pro. Entegrasyon sürecinde hangi platformu seçerseniz seçin, yanınızdayız.",
    ],
  },
  "lead-yonetimi-otomasyon": {
    title: "Lead Yönetimini Otomatikleştirin: Daha Az Çabayla Daha Fazla Satış",
    category: "Lead Yönetimi",
    readTime: "7 dk",
    date: "22 Nisan 2025",
    description: "Otomasyon ile leadleri puanlandırma, atama ve takip etme süreçlerini sıfır manuel çalışmayla yönetin.",
    content: [
      "Araştırmalara göre leadlerin %78'i ilk temas eden şirketten satın alıyor. Bir lead geldiğinde ne kadar hızlı yanıt verdiğiniz, satışı kazanıp kazanmadığınızı belirliyor.",
      "Lead otomasyonu nasıl çalışır? Form dolduran, reklamınıza tıklayan veya sitenizi ziyaret eden her potansiyel müşteri otomatik olarak sisteme kaydedilir ve puanlandırılır.",
      "Puanlama kriterleri şunlar olabilir: hangi sayfaları ziyaret etti, formu doldurdu mu, fiyatlandırma sayfasına baktı mı, daha önce iletişime geçti mi. Bu puanlara göre sıcak leadler öncelikli olarak doğru satış temsilcisine atanır.",
      "Atama sonrası otomasyon devreye girer: temsilciye anlık bildirim, müşteriye hoş geldin mesajı, takip hatırlatıcıları ve yanıt verilmezse yöneticiye eskalasyon.",
      "Bu sistemi kuran işletmeler ortalama %40 daha fazla leadi satışa dönüştürüyor. Çünkü hiçbir lead kaybolmuyor, her biri zamanında takip ediliyor.",
    ],
  },
  "eposta-otomasyon-kampanyalari": {
    title: "E-posta Otomasyon Kampanyaları ile Müşteri Bağlılığını Artırın",
    category: "E-posta",
    readTime: "5 dk",
    date: "14 Nisan 2025",
    description: "Davranışa dayalı kişiselleştirilmiş e-posta serileri ile açılma oranlarını nasıl ikiye katlarsınız?",
    content: [
      "Toplu e-posta göndermek artık işe yaramıyor. Spam filtrelerine takılıyor, açılma oranları düşüyor ve müşteriler listeden ayrılıyor. Çözüm: davranışa dayalı otomasyon.",
      "Davranış tabanlı e-posta otomasyonunda her mesaj, alıcının spesifik bir eylemine göre tetiklenir. Sepetini terk etti mi? Terk sepeti e-postası gönderilir. Bir ürün sayfasını 3 kez ziyaret etti mi? O ürüne özel teklif gider.",
      "Etkili bir otomasyon dizisi şunları içermeli: karşılama serisi (ilk 7 gün), eğitim içerikleri (ürünü nasıl kullanır), sosyal kanıt (müşteri hikayeleri), teklif (doğru zamanda doğru indirim).",
      "Kişiselleştirme kilit faktör. İsim kullanmak yetmez. Sektör, şirket büyüklüğü veya ilgilendiği ürün kategorisine göre farklı içerik gönderin.",
      "Doğru kurulmuş bir e-posta otomasyon sistemi, ortalama %65 daha yüksek açılma oranı ve %40 daha yüksek tıklama oranı sağlar. Kurulum bir kez yapılır, sonsuza kadar çalışır.",
    ],
  },
  "is-akisi-otomasyonu-baslangic": {
    title: "İş Akışı Otomasyonuna Başlamak İçin 5 Kolay Adım",
    category: "Otomasyon",
    readTime: "4 dk",
    date: "5 Nisan 2025",
    description: "İşletmenizde en çok zaman alan tekrarlayan görevleri tespit edip bunları otomatikleştirmeye nereden başlayacağınızı anlattık.",
    content: [
      "İş akışı otomasyonu karmaşık değil. Çoğu işletme nereden başlayacağını bilmediği için erteliyor. Bu rehber size net bir başlangıç noktası sunuyor.",
      "Adım 1: Tekrarlayan görevleri listeleyin. Haftada kaç saat harcandığını not edin. Her gün yapılan veri girişi, rapor hazırlama, bildirim gönderme ve randevu planlama başlıca adaylar.",
      "Adım 2: Öncelik belirleyin. En çok zaman alan ve en sık tekrarlanan görevi ilk otomatikleştirin. Küçük bir kazanım ekibin motivasyonunu artırır.",
      "Adım 3: Doğru aracı seçin. Make (eski Integromat), Zapier veya n8n gibi no-code araçlarla teknik bilgi gerektirmeden otomasyonlar kurabilirsiniz.",
      "Adım 4: Test edin. Otomasyon canlıya almadan önce tüm senaryoları test edin. Hata senaryolarını da düşünün.",
      "Adım 5: Ölçün ve iyileştirin. Otomasyon devreye girdikten sonra kazanılan zamanı ve hata oranını ölçün. İlk kurulum mükemmel olmak zorunda değil, zamanla gelişir.",
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return { title: "Yazı Bulunamadı" };
  return { title: post.title, description: post.description };
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-gutter">
        <Link href="/blog" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-sm mb-10 transition-colors">
          <ArrowLeft size={16} />
          Tüm Yazılar
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-label-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
          <span className="flex items-center gap-1 text-on-surface-variant text-xs">
            <Clock size={12} /> {post.readTime}
          </span>
          <span className="text-on-surface-variant text-xs">{post.date}</span>
        </div>

        <h1 className="text-h1-mobile text-on-surface mb-10 leading-tight">{post.title}</h1>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-body-lg text-on-surface-variant leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 glass border border-white/10 rounded-3xl p-8 text-center">
          <h3 className="text-on-surface font-bold text-xl mb-3">Bu konuda yardım almak ister misiniz?</h3>
          <p className="text-on-surface-variant text-sm mb-6">İşletmenize özel otomasyon çözümü için ücretsiz görüşme alın.</p>
          <Link href="/iletisim" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
            Ücretsiz Görüşme Al <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
