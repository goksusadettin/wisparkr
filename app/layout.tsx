import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://wisparkr.com"),
  title: {
    default: "Wisparkr — Yapay Zeka Otomasyon Ajansı",
    template: "%s | Wisparkr",
  },
  description:
    "Wisparkr, işletmenizin tekrar eden süreçlerini yapay zeka ile otomatikleştiren dijital otomasyon ajansıdır. WhatsApp otomasyonu, AI chatbot, CRM entegrasyonu ve daha fazlası.",
  keywords: [
    "yapay zeka otomasyon", "chatbot", "crm otomasyonu", "whatsapp otomasyon",
    "iş akışı otomasyonu", "dijital ajans", "istanbul", "wisparkr",
  ],
  authors: [{ name: "Wisparkr" }],
  creator: "Wisparkr",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://wisparkr.com",
    siteName: "Wisparkr",
    title: "Wisparkr — Yapay Zeka Otomasyon Ajansı",
    description: "İşletmenizin tekrar eden süreçlerini yapay zeka ile otomatikleştiriyoruz.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Wisparkr" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wisparkr",
    creator: "@wisparkr",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-[#0A0A0F] text-on-surface antialiased selection:bg-primary/30">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
