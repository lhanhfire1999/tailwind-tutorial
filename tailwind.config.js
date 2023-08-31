/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero.jpg')",
        band1: "url('/src/assets/images/band1.jpg')",
        band2: "url('/src/assets/images/band2.jpg')",
        band3: "url('/src/assets/images/band3.jpg')",
        band4: "url('/src/assets/images/band4.jpg')",
        band5: "url('/src/assets/images/band5.jpg')",
        band6: "url('/src/assets/images/band6.jpg')",
        band7: "url('/src/assets/images/band7.jpg')",
      },
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey 1000ms linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
  ],
};
