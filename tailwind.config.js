const { light, dark } = require("@charcoal-ui/theme");
const { createTailwindConfig } = require("@charcoal-ui/tailwind-config");
/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: true,
  content: [
    "./src/**/*.tsx",
    "./src/**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  presets: [
    createTailwindConfig({
      version: "v3",
      theme: {
        ":root": light,
      },
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#234d6f",
        "primary-hover": "#276897",
        "primary-press": "#6198cb",
        "primary-disabled": "#6F48694D",

        secondary: "#234d6f",
        "primary-hover": "#276897",
        "primary-press": "#6198cb",
        "primary-disabled": "#6F48694D",
        base: "#ebe6e1",
        "text-primary": "#234d6f",
      },
      fontFamily: {
        M_PLUS_2: ["var(--font-m-plus-2)"],
        Montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
