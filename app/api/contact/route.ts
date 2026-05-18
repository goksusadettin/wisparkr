import { NextRequest, NextResponse } from "next/server";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();
  return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message, recaptchaToken } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Eksik alan" }, { status: 400 });
    }

    const recaptchaOk = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaOk) {
      return NextResponse.json({ error: "reCAPTCHA doğrulaması başarısız" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Sunucu yapılandırma hatası" }, { status: 500 });
    }

    const emailBody = `
Yeni Görüşme Talebi — Wisparkr

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || "Belirtilmedi"}
Şirket: ${company || "Belirtilmedi"}
İlgilenilen Hizmet: ${service}

Mesaj:
${message}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Wisparkr Form <info@wisparkr.com>",
        to: ["novateknoloji3@gmail.com"],
        subject: `Yeni Görüşme Talebi: ${name} — ${service}`,
        text: emailBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend hatası:", err);
      return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API hatası:", err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
