/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        white: "0px 35px 35px rgba(0, 0, 0, 1)",
      },
      colors: {
        primary: "#D9B658",
        secondary: "#FAFAFA",
        root: "#1E1E1E",
      },
      fontFamily: {
        noto: ["Noto Serif", "serif"],
        monrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
