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
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
      },
      fontFamily: {
        sans: ["var(--font-kardia)", "sans-serif"],
        kameron: ["var(--font-kameron)", "sans-serif"],
      },
      boxShadow: {
        primaryShadow: "3px 4px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};
export default config;
