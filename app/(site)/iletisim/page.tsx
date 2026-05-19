"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, MessageCircle, Clock } from "lucide-react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { CONTACT } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Lütfen bir hizmet seçin"),
  message: z.string().min(20, "Mesaj en az 20 karakter olmalıdır"),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  "WhatsApp Otomasyonu",
  "Lead Yakalama",
  "CRM Entegrasyonu",
  "AI Chatbot",
  "E-posta Otomasyonu",
  "Süreç Analizi",
  "Genel Bilgi",
];

const inputClass =
  "w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form");
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass rounded-3xl border border-white/5 p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <Check size={40} className="text-green-400" />
        </div>
        <h3 className="text-h2-mobile text-on-surface mb-4">Teşekkürler! Mesajınızı aldık.</h3>
        <div className="space-y-2 mb-8">
          <p className="text-body-md text-on-surface-variant">📞 1 saat içinde size geri döneceğiz.</p>
          <p className="text-body-md text-on-surface-variant">
            💬 Acil durumda{" "}
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">
              WhatsApp&apos;tan
            </a>
            {" "}da ulaşabilirsiniz.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp&apos;tan Yaz
          </a>
          <button onClick={() => setStatus("idle")} className="btn-ghost px-6 py-3">
            Yeni Mesaj Gönder
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl border border-white/5 p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-label-sm text-on-surface-variant mb-2">Ad Soyad <span className="text-red-400">*</span></label>
          <input {...register("name")} placeholder="Ahmet Yılmaz" className={inputClass} />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-label-sm text-on-surface-variant mb-2">E-posta <span className="text-red-400">*</span></label>
          <input {...register("email")} type="email" placeholder="ahmet@sirket.com" className={inputClass} />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-label-sm text-on-surface-variant mb-2">Telefon</label>
          <input {...register("phone")} placeholder="+90 555 000 00 00" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-label-sm text-on-surface-variant mb-2">İlgilendiğiniz Hizmet <span className="text-red-400">*</span></label>
        <select {...register("service")} className={inputClass}>
          <option value="">Seçiniz...</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-label-sm text-on-surface-variant mb-2">Mesajınız <span className="text-red-400">*</span></label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="İşletmeniz hakkında kısa bir bilgi ve ne tür bir otomasyon istediğinizi yazın..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp&apos;tan ulaşın.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send size={16} />
            Görüşme Talep Et
          </>
        )}
      </button>

      <p className="text-xs text-on-surface-variant/50 text-center">
        Bu form Google reCAPTCHA ile korunmaktadır.
      </p>
    </form>
  );
}

export default function IletisimPage() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <main className="pt-32 pb-20">
        <div className="relative overflow-hidden py-16 px-gutter text-center mb-12">
          <div className="glow-sphere w-[400px] h-[400px] bg-secondary top-0 left-1/2 -translate-x-1/2" />
          <div className="relative z-10 max-w-container-max mx-auto">
            <span className="inline-block text-label-sm text-primary mb-4 uppercase tracking-widest">İletişim</span>
            <h1 className="text-h1-mobile md:text-h2 text-on-surface mb-4">
              Görüşme <span className="gradient-text">Talep Et</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
              30 dakikalık ücretsiz keşif görüşmesinde işletmenize özel otomasyon fırsatlarını birlikte keşfedelim.
            </p>
          </div>
        </div>

        <div className="max-w-container-max mx-auto px-gutter">
          {/* Yanıt garantisi banner */}
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-4 mb-10">
            <Clock size={18} className="text-emerald-400 shrink-0" />
            <p className="text-emerald-300 text-sm">
              <span className="font-semibold">Mesai saatleri içinde 1 saat,</span> hafta sonu maksimum 6 saatte dönüyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-h2-mobile text-on-surface">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <a href={CONTACT.emailLink} className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/30 border border-white/5 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-label-sm text-on-surface-variant">E-posta</div>
                    <div className="text-body-md text-on-surface">{CONTACT.email}</div>
                  </div>
                </a>
                <a href={CONTACT.phoneLink} className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-secondary/30 border border-white/5 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-label-sm text-on-surface-variant">Telefon</div>
                    <div className="text-body-md text-on-surface">{CONTACT.phone}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-label-sm text-on-surface-variant">Konum</div>
                    <div className="text-body-md text-on-surface">{CONTACT.location}</div>
                  </div>
                </div>
              </div>

              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp&apos;tan Yaz
              </a>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>
    </GoogleReCaptchaProvider>
  );
}
