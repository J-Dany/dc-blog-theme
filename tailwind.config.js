import defaultTheme from "tailwindcss/defaultTheme";
import { sky, yellow, green, gray } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./**/*.hbs",
    "./partials/**/*.hbs",
    "./partials/partials/**/*.hbs",
    "./**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        left: "left",
      },
      padding: {
        tag: "0px 10px"
      },
      textColor: {
        tag: "#2676ff",
      },
      borderRadius: {
        goto: "20px",
        cardImage: "20px",
        toggleMode: "20px"
      },
      backgroundColor: {
        goto: "rgba(0, 0, 0, 0.5)",
        tag: "rgba(38, 118, 255, 0.17)",
      },
      aspectRatio: {
        169: "16 / 9",
        1610: "16 / 10",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "2xsm": "375px",
        xsm: "425px",
        "3xl": "2000px",
        ...defaultTheme.screens,
      },
      colors: {
        whatsapp: "#25d366",
        gray: gray,
        info: sky,
        warning: yellow,
        success: green,
        primary: {
          default: "hsl(358, 85%, 52%)",
          100: "hsl(1, 84%, 90%)",
          200: "hsl(358, 86%, 81%)",
          300: "hsl(357, 85%, 71%)",
          400: "hsl(358, 86%, 62%)",
          500: "hsl(358, 85%, 52%)",
          600: "hsl(358, 78%, 42%)",
          700: "hsl(357, 80%, 31%)",
          800: "hsl(357, 81%, 20%)",
          900: "hsl(0, 74%, 10%)",
        },
        secondary: {
          default: "hsl(149, 100%, 29%)",
          100: "hsl(150, 39%, 86%)",
          200: "hsl(148, 39%, 71%)",
          300: "hsl(149, 40%, 57%)",
          400: "hsl(149, 54%, 43%)",
          500: "hsl(149, 100%, 29%)",
          600: "hsl(149, 100%, 23%)",
          700: "hsl(148, 98%, 18%)",
          800: "hsl(149, 97%, 12%)",
          900: "hsl(150, 93%, 6%)",
        },
        danger: {
          default: "hsl(10, 89%, 58%)",
          100: "hsl(9, 90%, 92%)",
          200: "hsl(12, 88%, 83%)",
          300: "hsl(10, 90%, 75%)",
          400: "hsl(11, 88%, 66%)",
          500: "hsl(10, 89%, 58%)",
          600: "hsl(11, 65%, 46%)",
          700: "hsl(11, 63%, 35%)",
          800: "hsl(10, 63%, 23%)",
          900: "hsl(8, 63%, 12%)",
        },
      },
      fontSize: {
        "title-xxl": ["44px", "55px"],
        "title-xxl2": ["42px", "58px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-sm2": ["22px", "28px"],
        "title-xsm": ["18px", "24px"],
      },
      width: {
        myPhoto: "179px",
        cta: "185px",
        goto: "60px",
        toggleMode: "60px",
        activeMode: "30px",
        mode: "30px",
        sidebar: "280px",
      },
      height: {
        myPhoto: "173px",
        cta: "45px",
        goto: "60px",
        toggleMode: "30px",
        activeMode: "30px",
      },
    },
    translate: {
      backAll: "-100%",
      forwardAll: "100%",
      initial: "0%",
    },
    boxShadow: {
      card3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      card4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      card5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    },
    dropShadow: {
      1: "0px 1px 4px rgba(0, 0, 0, 0.12)",
      2: "0px 0px 4px rgba(0, 0, 0, 0.15)",
      3: "0px 0px 2px rgba(0, 0, 0, 0.2)",
      4: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    },
  },
  plugins: [],
};

export default config;
