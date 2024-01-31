/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        content: 'clamp(10rem, 8vw, 20rem) 8fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
