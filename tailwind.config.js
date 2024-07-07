/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "#8121D0",
        mediumPurple: "#331C52",
        darkPurple: "#291C3A",
        pink: "#DCCFED",
      },
    },
  },
  plugins: [],
};
