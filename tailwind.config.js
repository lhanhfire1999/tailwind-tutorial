/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [require("./plugins/openVariant")],
};
