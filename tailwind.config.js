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
          400: '#5bb8e8',
          500: '#2689c7',
          600: '#2689c7',
          700: '#1d6fa3',
          950: '#041118',
        },
      },
    },
  },
  plugins: [],
};
