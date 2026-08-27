import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0A0A0B",
        "noir-soft": "#141416",
        "noir-line": "#26262A",
        gold: "#C9A227",
        "gold-light": "#E7D08A",
        "gold-deep": "#8C6D1F",
        bone: "#F2EFE7",
        muted: "#A3A099",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.18em",
        tightest: "-0.03em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #8C6D1F 0%, #E7D08A 50%, #C9A227 100%)",
        "gold-gradient-horizontal": "linear-gradient(90deg, #8C6D1F 0%, #E7D08A 50%, #C9A227 100%)",
        "gold-fillet": "linear-gradient(90deg, transparent 0%, #C9A227 50%, transparent 100%)",
        "gold-fillet-soft": "linear-gradient(90deg, transparent 0%, rgba(201, 162, 39, 0.4) 50%, transparent 100%)",
        "noir-radial": "radial-gradient(ellipse at top, #141416 0%, #0A0A0B 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(201, 162, 39, 0.25)",
        "gold-glow-lg": "0 0 45px -10px rgba(201, 162, 39, 0.35)",
        "noir-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer-gold": "shimmer 2.5s infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
