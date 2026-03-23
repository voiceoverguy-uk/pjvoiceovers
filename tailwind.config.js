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
          400: '#f56565',
          500: '#e02020',
          600: '#c81a1a',
          700: '#a81515',
          950: '#1a0505',
        },
      },
    },
  },
  plugins: [],
};
