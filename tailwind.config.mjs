import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Macondo", ...defaultTheme.fontFamily.sans],
        serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "hero-card": "url('/imgs/bg.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
