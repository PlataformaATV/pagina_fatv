/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-links': '#222D56',
        'btn-back': '#7C76B5'
      },
    },
  },
  plugins: [],
}