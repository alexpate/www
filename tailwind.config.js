/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['TT Hoves Pro Trial', 'sans-serif'],
      },
      gridTemplateColumns: {
        content: 'clamp(10rem, 8vw, 20rem) 8fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
