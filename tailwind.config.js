/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'shinhan': ["OneShinhanMedium", "sans"],
      'shinhan-b': ["OneShinhanBold"],
      'shinhan-l': ["OneShinhanLight"],
    },
  },
  plugins: [],
}

