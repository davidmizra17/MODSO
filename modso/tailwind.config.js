/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf7f1",
          100: "#f5ecdf",
          200: "#ead7be",
          300: "#dcba95",
          400: "#d1a177",
          500: "#c27f4d",
          600: "#b46b42",
          700: "#965538",
          800: "#794533",
          900: "#623b2c",
          950: "#341c16",
        },
        secondary: {
          50: "#f7f6f5",
          100: "#e8e5df",
          200: "#dbd5cd",
          300: "#c4bbad",
          400: "#ab9d8c",
          500: "#9a8875",
          600: "#8d7869",
          700: "#766458",
          800: "#61524b",
          900: "#50453e",
          950: "#2a2320",
        },
      },
    },
  },
  plugins: [],
};
