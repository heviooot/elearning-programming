module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        orange: "#ff6900",
        lessdark: "#3c6e71",
        reallydark: "#353535",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
