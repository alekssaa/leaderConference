/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["PT Serif", "serif"],
      },
    },
    colors: {
      blue: {
        DEFAULT: "#2217D6FF",
        50: "#12f3ef",
        100: "#1a1a5a",
        200: "#250b5c",
      },
      white: {
        DEFAULT: "#eeefef",
      },
      black: {
        DEFAULT: "#000000",
        50: "#12f3ef",
      },
      gray: {
        DEFAULT: "#b1b1b1",
        50: "#c7c3bd",
        100: "#78746f",
      },
      orange: {
        DEFAULT: "#faebd8",
      },
      green: {
        DEFAULT: "#41c23a",
        50: "#45ab6e",
        100: "#a7ebd4",
      },
    },
  },
  plugins: [],
};
