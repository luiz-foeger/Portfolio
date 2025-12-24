/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lavishly': ['"Lavishly Yours"', 'cursive'],
        'mea': ['"Mea Culpa"', 'cursive'],
        'jersey': ['"Jersey 10"', 'sans-serif'],
        'changa': ['"Changa One"', 'display'],
        'gothic': ['"UnifrakturMaguntia"', 'cursive'], // Essa fonte gótica é insana!
        'jacquard': ['"Jacquard 24"', 'sans-serif'],
        'rye': ['"Rye"', 'serif'],
        sans: ['"Lexend"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}