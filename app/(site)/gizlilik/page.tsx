import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Wisparkr gizlilik politikası ve KVKK aydınlatma metni.",
};

const sections = [
  {
    title: "1. Veri Sorumlusu",
    content: `Bu Gizlilik Politikası, Wisparkr ("biz", "bizim") tarafından yönetilen wisparkr.com web sitesi için geçerlidir. Kişisel verilerinizin işlenmesinden sorumlu veri sorumlusu Wisparkr'dır. İletişim: info@wisparkr.com`,
  },
  {
    title: "2. Toplanan Veriler",
    content: `Web sitemizi kullandığınızda aşağıdaki veriler toplanabilir:

• Ad, soyad ve iletişim bilgileri (e-posta, telefon)
• Şirket adı ve unvan
• İletişim formları aracılığıyla gönderilen mesajlar
• IP adresi ve tarayıcı bilgileri
• Çerezler aracılığıyla toplanan kullanım verileri`,
  },
  {
    title: "3. Verilerin İşlenme Amaçları",
    content: `Kişisel verileriniz şu amaçlarla işlenmektedir:

• Görüşme taleplerini yanıtlamak ve hizmet sunmak
• Müşteri desteği sağlamak
• Yasal yükümlülükleri yerine getirmek
• Web sitesi performansını iyileştirmek
• Güvenliği sağlamak`,
  },
  {
    title: "4. Çerez Politikası",
    content: `Web sitemiz, size daha iyi bir deneyim sunmak için çerezler kullanmaktadır. Oturum çerezleri, tercih çerezleri ve analitik çerezler kullanılabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.`,
  },
  {
    title: "5. Veri Paylaşımı",
    content: `Kişisel verileriniz; yasal zorunluluklar haricinde, açık rızanız olmaksızın üçüncü taraflarla paylaşılmaz. Hizmetlerimizin sunulması için zorunlu olan altyapı sağlayıcıları (e-posta servisleri, barındırma hizmetleri gibi) verilerinize erişebilir. Bu sağlayıcılar gizlilik yükümlülükleriyle bağlıdır.`,
  },
  {
    title: "6. Veri Güvenliği",
    content: `Verileriniz, SSL şifreleme ve güvenlik duvarları gibi standart güvenlik önlemleriyle korunmaktadır. Tüm iletişimler HTTPS üzerinden gerçekleştirilmekte, veriler yalnızca güvenli sunucularda saklanmaktadır.`,
  },
  {
    title: "7. Veri Saklama Süresi",
    content: `Kişisel verileriniz, işlenme amacı sona erdiğinde veya yasal saklama süreleri dolduğunda silinmekte ya da anonimleştirilmektedir. İletişim formu verileri, talebiniz karşılandıktan sonra en fazla 2 yıl saklanır.`,
  },
  {
    title: "8. Haklarınız (KVKK Kapsamında)",
    content: `6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenen veriler hakkında bilgi talep etme
• İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme
• Verilerin silinmesini veya yok edilmesini talep etme
• İşlemenin otomatik sistemler aracılığıyla yapılması halinde aleyhinize bir sonuç doğurmasına itiraz etme
• Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme

Bu haklarınızı kullanmak için info@wisparkr.com adresine yazabilirsiniz.`,
  },
  {
    title: "9. Üçüncü Taraf Bağlantılar",
    content: `Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz. Üçüncü taraf siteleri ziyaret ettiğinizde ilgili sitenin gizlilik politikasını incelemenizi öneririz.`,
  },
  {
    title: "10. Politika Güncellemeleri",
    content: `Bu Gizlilik Politikası, yasal düzenlemeler veya hizmetlerimizdeki değişiklikler nedeniyle güncellenebilir. Önemli değişiklikler web sitemiz üzerinden duyurulacaktır. Politikanın en güncel haline her zaman bu sayfadan ulaşabilirsiniz.`,
  },
  {
    title: "11. İletişim",
    content: `Gizlilik uygulamalarımız veya kişisel verileriniz hakkında sorularınız için:

E-posta: info@wisparkr.com
Telefon: +90 531 105 32 95
Adres: İstanbul, Türkiye`,
  },
];

export default function GizlilikPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="mb-12">
          <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">Yasal</span>
          <h1 className="text-h2-mobile md:text-h2 text-on-surface mb-4">Gizlilik Politikası</h1>
          <p className="text-body-md text-on-surface-variant">
            Son güncelleme: Ocak 2025
          </p>
          <p className="text-body-md text-on-surface-variant mt-4 leading-relaxed">
            Wisparkr olarak kişisel verilerinizin gizliliğine büyük önem veriyoruz. Bu politika, hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızın neler olduğunu açıklamaktadır.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="glass rounded-2xl border border-white/5 p-6">
              <h2 className="text-[20px] font-semibold text-on-surface mb-4">{section.title}</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl border border-primary/20 p-6 text-center">
          <p className="text-body-md text-on-surface-variant mb-4">
            KVKK haklarınız veya gizlilik konularında sorularınız için bize ulaşın.
          </p>
          <Link href="/iletisim" className="btn-primary inline-block px-8 py-3">
            İletişime Geç
          </Link>
        </div>
      </div>
    </main>
  );
}
