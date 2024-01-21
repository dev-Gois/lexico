/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'main': {
          100: '#4E4E4E',
          200: '#2D2D2D',
          300: '#222222',
        },
        'result': {
          'middle': "#D3AD69",
          'correct': '#3AA394',
          'without': '#181818',
        },
        'modal': {
          'primary': "#641B9D"
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
