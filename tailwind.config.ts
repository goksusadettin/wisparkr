import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#131318",
        "surface-dim": "#0e0e13",
        "surface-bright": "#39383e",
        "surface-container-lowest": "#0e0e13",
        "surface-container-low": "#1b1b20",
        "surface-container": "#1f1f25",
        "surface-container-high": "#2a292f",
        "surface-container-highest": "#35343a",
        "on-surface": "#e4e1e9",
        "on-surface-variant": "#c2c6d6",
        "outline": "#8c909f",
        "outline-variant": "#424754",
        primary: "#adc6ff",
        "on-primary": "#002e6a",
        "primary-container": "#4d8eff",
        secondary: "#d0bcff",
        "on-secondary": "#3c0091",
        "secondary-container": "#571bc1",
        "on-secondary-container": "#c4abff",
        tertiary: "#4cd7f6",
        "tertiary-container": "#009eb9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1": ["88px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "h1-mobile": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2": ["56px", { lineHeight: "1.2", letterSpacing: "-0.03em", fontWeight: "600" }],
        "h2-mobile": ["32px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "120px",
        "container-max": "1280px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.3)",
        "glow-sm": "0 0 15px rgba(139, 92, 246, 0.2)",
        "glow-primary": "0 0 20px rgba(173, 198, 255, 0.3)",
        card: "0 4px 24px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        "gradient-text": "linear-gradient(135deg, #adc6ff 0%, #d0bcff 100%)",
        "gradient-hero": "radial-gradient(ellipse at top, #1a1a2e 0%, #0A0A0F 60%)",
        "gradient-cta": "linear-gradient(135deg, rgba(30,27,75,0.5) 0%, rgba(76,29,149,0.4) 100%)",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
