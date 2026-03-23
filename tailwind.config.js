/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          400: '#5ce0bb',
          500: '#26c797',
          600: '#26c797',
          700: '#1da07a',
          950: '#041a11',
        },
      },
    },
  },
  plugins: [],
};
