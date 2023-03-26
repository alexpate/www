/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
