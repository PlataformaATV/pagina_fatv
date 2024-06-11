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
        'btn-back': '#7c78b3',
        'title' : '#33526d',
        'ourteam' : '#ffba08',
        'content' : '#232e55',
        
      },
      fontFamily: {
        'oswald': ['Oswald'],
        'roboto': ['Roboto']
      },
      margin: {
        '128px': '128px'
      }
    },
  },
  plugins: [],
}