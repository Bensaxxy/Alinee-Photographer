/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "playfair Display",
      secondary: "mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        gray: "#484B4B",

        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
