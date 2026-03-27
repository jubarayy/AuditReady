import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#eaf0ff",
          200: "#d2defd",
          300: "#afc2fb",
          400: "#87a2f8",
          500: "#6478f4",
          600: "#4b5ae8",
          700: "#3f47d0",
          800: "#373ca9",
          900: "#333885"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
