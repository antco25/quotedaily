/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '376px',
      'xsm': '576px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        'sm': ['0.8125rem'],
        'base': ['0.9375rem']
      },
      fontFamily: {
        'condensed': ['Barlow Condensed']
      }
    },
  },
  plugins: [],
}
