/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      container: {
        padding : "3rem",
      },
    },
    screens: {
      md: { max: "1050px" },
      lg: { max: "791px" },
      sm:{ max: "500px"},
      xll: "1280px",
      
    }
  }
};
