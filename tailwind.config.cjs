// tailwind.config.cjs
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        calanda: {
          red: "#D62828",
          dark: "#1E1E1E"
        }
      }
    }
  },
  plugins: [],
};
