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
        bg: "#fcf9f2",
        surface: "#f6f3ec",
        "surface-2": "#ebe8e1",
        "surface-3": "#e5e2db",
        "surface-container": "#f1eee7",
        "surface-container-low": "#f6f3ec",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#ebe8e1",
        "surface-container-highest": "#e5e2db",
        border: "#8c7166",
        "border-bright": "#e0c0b2",
        primary: "#9e3d00",
        "primary-dim": "#c64f00",
        text: "#1c1c18",
        "text-dim": "#594238",
        "text-bright": "#31312c",
        "inverse-surface": "#31312c",
        "inverse-on-surface": "#f3f0e9",
        "secondary-container": "#d5e2e3",
        secondary: "#546162",
        "secondary-dim": "#bcc9ca",
        "outline-variant": "#e0c0b2",
        "electric-aqua": "#9e3d00",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
