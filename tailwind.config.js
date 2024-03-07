/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
        mini: {max:"380px"},
        md:{max:"450px"}
      },
      colors: {
        primary: "#f03649",
        secondary: "#0dbb83",
        background: "#eef2f5",
        foreground: "#ffff",
        gray: "#3c434a",
        light_gray: "#a4a1a1",
        blue: "#0052fe",
        light_blue: "#e7f4fd",
        green : "#e7faf4",
        light_green: "#eaf9f4",
        light_red: "#ffcdd2",
        barblue: "#0081fd",
        barorgange: "#f6a104",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
