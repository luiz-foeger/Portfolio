/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        foeger: ['"Foeger Sans"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        sans: ['"Lexend"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}