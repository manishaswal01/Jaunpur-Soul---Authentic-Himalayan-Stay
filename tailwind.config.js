module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-white": "#ffffff",
        "pure-black": "#000000",
        "accent-gold": "#D97706",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
}