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
        // Vintage "old money" palette
        bg: "#faf5e6", // soft cream background
        surface: "#e3d9c6",
        "surface-2": "#d5c9b3",
        "surface-3": "#c2b59f",
        border: "#b6a789",
        "border-bright": "#a1977a",
        primary: "#b8860b", // antique gold
        "primary-dim": "#cdaa7d",
        text: "#3e2723", // deep brown text
        "text-dim": "#5d4037",
      },
      fontFamily: {
        // Serif fonts for classy typography
        display: ["'Playfair Display'", "serif"],
        serif: ["'Cormorant Garamond'", "serif"],
        // Retain existing monospace and sans options
        mono: ["'IBM Plex Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      // Optional subtle paper texture background – can be customized later
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
