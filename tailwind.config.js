/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calanda: {
          red: "#D62828",
          dark: "#0F172A",
          ink: "#111827"
        }
      }
    }
  },
  plugins: []
}
