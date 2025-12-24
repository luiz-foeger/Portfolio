/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mea-culpa': ['"Mea Culpa"', 'cursive'],
        sans: ['"Lexend"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}