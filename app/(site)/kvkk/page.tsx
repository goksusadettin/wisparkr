import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Wisparkr KVKK (Kişisel Verilerin Korunması Kanunu) aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="mb-12">
          <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">Yasal</span>
          <h1 className="text-h2-mobile md:text-h2 text-on-surface mb-4">KVKK Aydınlatma Metni</h1>
          <p className="text-body-md text-on-surface-variant">Son güncelleme: Ocak 2025</p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "Veri Sorumlusu",
              content: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Wisparkr tarafından aşağıda açıklanan kapsamda işlenecektir.`,
            },
            {
              title: "İşlenen Kişisel Veriler",
              content: `Ad-soyad, e-posta adresi, telefon numarası, şirket bilgisi ve iletişim formları aracılığıyla iletilen mesaj içerikleri işlenmektedir.`,
            },
            {
              title: "Kişisel Veri İşlemenin Amaçları",
              content: `Kişisel verileriniz; hizmet taleplerinizin karşılanması, müşteri ilişkilerinin yönetimi, yasal yükümlülüklerin yerine getirilmesi ve güvenliğin sağlanması amaçlarıyla işlenmektedir.`,
            },
            {
              title: "Kişisel Verilerin Aktarılması",
              content: `Kişisel verileriniz, yasal zorunluluklar dışında açık rızanız olmaksızın üçüncü taraflarla paylaşılmamaktadır. Hizmet altyapısı kapsamında yalnızca gerekli teknik hizmet sağlayıcılarla sınırlı ölçüde paylaşılabilir.`,
            },
            {
              title: "Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi",
              content: `Kişisel verileriniz; web sitesi iletişim formları ve e-posta yoluyla elektronik ortamda toplanmaktadır. İşlemenin hukuki sebebi; sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması ve meşru menfaattir.`,
            },
            {
              title: "KVKK Kapsamındaki Haklarınız",
              content: `KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:\n\n• Kişisel verilerinizin işlenip işlenmediğini öğrenme\n• İşlenmişse buna ilişkin bilgi talep etme\n• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme\n• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme\n• Eksik veya yanlış işlenmiş ise düzeltilmesini isteme\n• KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme\n• Yapılan işlemlerin veri aktarılan üçüncü kişilere bildirilmesini isteme\n• Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme\n• Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme`,
            },
            {
              title: "Başvuru Yöntemi",
              content: `Yukarıda belirtilen haklarınızı kullanmak için info@wisparkr.com adresine yazılı olarak başvurabilirsiniz. Başvurularınız en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır.`,
            },
          ].map((section) => (
            <div key={section.title} className="glass rounded-2xl border border-white/5 p-6">
              <h2 className="text-[18px] font-semibold text-on-surface mb-3">{section.title}</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl border border-primary/20 p-6 text-center">
          <p className="text-body-md text-on-surface-variant mb-4">
            KVKK haklarınızla ilgili sorularınız için bize ulaşın.
          </p>
          <Link href="/iletisim" className="btn-primary inline-block px-8 py-3">
            İletişime Geç
          </Link>
        </div>
      </div>
    </main>
  );
}
