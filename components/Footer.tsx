import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { CONTACT, SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <>
      {/* Footer üstü CTA bandı */}
      <div className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 border-y border-white/10">
        <div className="max-w-container-max mx-auto px-gutter py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-on-surface text-lg font-medium max-w-xl">
            İşinizi otomatikleştirmek için 30 dakika ayırabilir misiniz?{" "}
            <span className="text-primary">Ücretsiz keşif görüşmesi</span> planlayalım.
          </p>
          <Link
            href="/iletisim"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all"
          >
            Hemen Görüşme Talep Et <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <footer className="relative w-full pt-section-gap pb-8 bg-surface-dim border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter max-w-container-max mx-auto">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-6 hover:opacity-90 transition-opacity w-fit">
            <Image src="/logo.png" alt="Wisparkr" width={36} height={36} className="rounded-lg" />
            <span className="text-h2-mobile font-bold text-on-surface">Wisparkr</span>
          </Link>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Yapay Zeka Otomasyon Ajansı. Geleceği kodluyor, işletmeleri özgürleştiriyoruz.
          </p>
          <div className="mt-5">
            <a href={CONTACT.emailLink} className="flex items-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors">
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-on-surface font-medium mb-6 text-label-sm uppercase tracking-wider">Kurumsal</h5>
          <ul className="space-y-4">
            {[
              { label: "Hizmetler", href: "/hizmetler" },
              { label: "Çalışmalarımız", href: "/calismalarimiz" },
              { label: "Hakkımızda", href: "/hakkimizda" },
              { label: "İletişim", href: "/iletisim" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-on-surface font-medium mb-6 text-label-sm uppercase tracking-wider">Kaynaklar</h5>
          <ul className="space-y-4">
            {[
              { label: "SSS", href: "/#sss" },
              { label: "Gizlilik Politikası", href: "/gizlilik" },
              { label: "KVKK", href: "/kvkk" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-on-surface font-medium mb-6 text-label-sm uppercase tracking-wider">Sosyal Medya</h5>
          <div className="flex flex-wrap gap-3">
            {[
              { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
              { href: SOCIAL.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: SOCIAL.twitter, Icon: Twitter, label: "X" },
              { href: SOCIAL.youtube, Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} Wisparkr. Yapay Zeka Otomasyon Ajansı.
        </p>
        <div className="flex gap-6">
          <Link href="/gizlilik" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
            Gizlilik Politikası
          </Link>
          <Link href="/kvkk" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors">
            KVKK
          </Link>
        </div>
      </div>
      </footer>
    </>
  );
}
