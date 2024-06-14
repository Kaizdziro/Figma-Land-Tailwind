/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens:{
        '2sm' : '320px'
      },
      fontFamily: {
        robototo: ['Roboto']
      }
    },
  },
  plugins: [],
}

