module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      boxShadow: {
        custom: ' 4px 4px 12px rgba(0, 0, 0, 0.6)',
      },
      screens: {
        xs: '336px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

// ne zaboravi tw purge!
