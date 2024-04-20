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
          DEFAULT: "#60A534",
        },
        secondary: {
          DEFAULT: "#D9FA06",
        },
      },
      fontFamily: {
        sans: ["var(--font-kardia)", "sans-serif"],
        kameron: ["var(--font-kameron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
