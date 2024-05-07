/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            h2: {
              fontSize: '1.3rem',
              marginBottom: '1rem',
            },
          },
        },
      },
      fontFamily: {
        mono: 'var(--font-monospace)',
      },
      boxShadow: {
        project: `
          0 2px 12px rgba(0, 0, 0, 0.02),
          0 4px 8px rgba(0, 0, 0, 0.03),
          0 2px 4px rgba(0, 0, 0, 0.04),
          0 1px 2px rgba(0, 0, 0, 0.05),
          0 1px rgba(0, 0, 0, 0.06),
          0 0 0 8px rgba(0, 0, 0, 0.02),
          0 24px 48px rgba(0, 0, 0, 0.08)
        `,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
