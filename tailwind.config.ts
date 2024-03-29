import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      logo: ["'Permanent Marker'"],
    },
  },
  plugins: [],
} satisfies Config;
