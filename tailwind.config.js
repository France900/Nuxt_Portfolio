/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.js",
    "./nuxt.config.js",
    "./error.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        sfondo: "#171D34",
        card: "#1D233C",
        titoli: "#FFFFFF",
        paragrafi: "#AFB6D2",
        specifiche: "#D88730",
        bottone: "#4AA5F0",
        gradchiaro: "#3A4368",
        gradscuro: "#1A2037",
      },
    },
  },
};
