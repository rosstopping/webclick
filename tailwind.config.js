const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Roboto Condensed', 'sans-serif'],
        'heading' : ['Roboto Condensed', 'sans-serif'],
        'sans' : ['Cabin', 'sans-serif']
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("@tailwindcss/forms")],
}
