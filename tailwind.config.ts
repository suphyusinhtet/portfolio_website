import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          bg: "#F7F1E8",
          surface: "#FDF9F4",
          primary: "#D8C3A5",
          accent: "#B8937A",
          ink: "#2E2622",
          muted: "#7C6A5F",
          line: "#E6D7C7",
        },
      },
      boxShadow: {
        soft: "0 14px 40px -26px rgba(46, 38, 34, 0.35)",
        card: "0 18px 50px -30px rgba(46, 38, 34, 0.45)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
