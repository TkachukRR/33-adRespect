/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      beige: "#DCC1AB",
      black: "#111111",
      green: "#1B5B31",
      grey: "#F5F0EC",
      white: "#FFFFFF",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      motser: ["Montserrat", "sans-serif"],
    },
    extend: {
      spacing: {},
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        "-.16": "-0.16px",
        "-.14": "-0.14px",
        "-.12": "-0.12px",
        "-1.4": "-1.4px",
        "-1.44": "-1.44px",
        "-2": "-2px",
        1: "1px",
      },
      lineHeight: {
        "70px": "70px",
        "115%": "115%",
        "120%": "120%",
        "150%": "150%",
      },
      fontSize: {
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "28px": "28px",
        "40px": "40px",
        "48px": "48px",
        "60px": "60px",
      },
      backgroundImage: {
        about: "url('../images/about.jpg')",
      },
    },
    plugins: [],
  },
};
