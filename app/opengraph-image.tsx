import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wisparkr — Yapay Zeka Otomasyon Ajansı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #131318 50%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow effects */}
        <div style={{ position: "absolute", top: 80, left: 200, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,130,255,0.15) 0%, transparent 70%)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 80, right: 200, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,130,255,0.12) 0%, transparent 70%)", display: "flex" }} />

        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(173,198,255,0.1)", border: "1px solid rgba(173,198,255,0.2)", borderRadius: 100, padding: "8px 20px", marginBottom: 32 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#adc6ff", display: "flex" }} />
          <span style={{ color: "#adc6ff", fontSize: 18, letterSpacing: 2 }}>YAPAY ZEKA OTOMASYON</span>
        </div>

        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(135deg, #4f6ef7, #9b6ef7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 36, fontWeight: 900 }}>W</span>
          </div>
          <span style={{ color: "#e4e1e9", fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>Wisparkr</span>
        </div>

        {/* Subtitle */}
        <p style={{ color: "#9b97a8", fontSize: 28, textAlign: "center", maxWidth: 700, lineHeight: 1.4, margin: 0 }}>
          WhatsApp Otomasyonu · CRM · Chatbot · Lead Yönetimi
        </p>

        {/* Bottom stats */}
        <div style={{ display: "flex", gap: 48, marginTop: 56 }}>
          {[["500+", "Otomasyon"], ["%40", "Daha Fazla Lead"], ["7/24", "Destek"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <span style={{ color: "#adc6ff", fontSize: 32, fontWeight: 800 }}>{val}</span>
              <span style={{ color: "#9b97a8", fontSize: 16 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
