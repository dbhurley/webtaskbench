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
        bg: "#0A0A0F",
        surface: "#16161F",
        border: "#2A2A3A",
        accent: "#7C3AED",
        win: "#00B894",
        warning: "#FDCB6E",
        text: "#F8F8F2",
        muted: "#8E8EA0",
      },
    },
  },
  plugins: [],
};
export default config;
