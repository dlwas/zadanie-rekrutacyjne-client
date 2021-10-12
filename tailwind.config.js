module.exports = {
  purge: {
    content: ["./*.html", "./src/**/*.vue"],
    safelist: ["bg-red-700", "bg-green-700", "bg-opacity-60"],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      colors: {},
      backgroundColor: {},
      screens: {},
      spacing: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
