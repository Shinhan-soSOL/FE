/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        's-blue': {
          50: '#F4F9FF',
          100: '#CCDAFF',
          200: '#99B5FE',
          300: '#6690FE',
          400: '#336BFD',
          500: '#0046FD',
          600: '#0038CA',
          700: '#002A98',
          800: '#001C65',
          900: '#000E33',
        },
        'ch-red': '#FF5B5B',
        'ch-blue': '#5B9DFF',
        's-gray': {
          50: '#D4D4D4',
          100: '#949494',
          200: '#777777',
          400: '#4E4E4E',
        },
      },
    },
    fontFamily: {
      shinhan: ['OneShinhanMedium', 'sans'],
      'shinhan-b': ['OneShinhanBold'],
      'shinhan-l': ['OneShinhanLight'],
    },
  },
  plugins: [],
};
