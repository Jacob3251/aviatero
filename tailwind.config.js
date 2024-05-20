import { FaZ } from "react-icons/fa6";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        // white: "0px 35px 35px rgba(0, 0, 0, 1)",
      },
      colors: {
        primary: "#D9B658",
        secondary: "#FAFAFA",
        root: "#050d0d",
      },
      fontFamily: {
        noto: ["Noto Serif", "serif"],
        monrope: ["Manrope", "sans-serif"],
      },
      screens: {
        xsm: "578px",
      },
    },
  },
  plugins: [],
};
