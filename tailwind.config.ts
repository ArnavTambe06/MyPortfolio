import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080c0a",
        surface: "#0d1210",
        "surface-2": "#111916",
        "surface-3": "#162119",
        border: "#1e2e24",
        "border-bright": "#2a4035",
        phosphor: "#4afa8a",
        "phosphor-dim": "#2a7a50",
        "phosphor-glow": "#1a4a30",
        amber: "#f0a030",
        "amber-dim": "#8a5a18",
        text: "#c8d4cc",
        "text-dim": "#6a8070",
        "text-bright": "#e8f0ec",
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(74,250,138,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,250,138,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
