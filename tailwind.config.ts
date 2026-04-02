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
        bg: "#04080F",
        surface: "#080E18",
        "surface-2": "#0D1525",
        border: "#162033",
        text: "#E2EAF4",
        muted: "#4A6080",
        accent: "#00E5A0",
        loss: "#FF4757",
        warning: "#F4A261",
        blue: "#4DA6FF",
        grid: "#0F1E30",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
