/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calanda: {
          red: "#8E1B2B",
          redBright: "#A8202F",
          dark: "#0F1C2B",
          gold: "#C2A36B",
          gray: "#5B6877",
          ink: "#0F1C2B",
        },
        ink: "#0F1C2B",
        bone: "#F6F2EB",
        bone2: "#EFE9DF",
        gold: "#C2A36B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    }
  },
  plugins: []
}
