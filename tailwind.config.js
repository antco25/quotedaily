/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
