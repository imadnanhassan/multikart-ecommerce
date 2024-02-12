/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      extend: {
        colors: {
          primaryColor: "#d4b196",
          yellowColor: "#FEB60D",
          purpleColor: "#9771FF",
          irisBlueColor: "#01B5C5",
          headingColor: "#181A1E",
          textColor: "#4E545F",
          hoverColor: "#1E2A34",
          redColor: "#f03737",
        },
        fontFamily: {
          primary: ["Montserrat", "sans-serif"],
          secondary: ["Josefin Sans", "sans-serif"],
          // extra: ["Josefin Sans", "sans-serif"],
        },
        transitionDuration: {
          1200: "1200ms",
        },
      },
    },
  },
  plugins: [],
};
