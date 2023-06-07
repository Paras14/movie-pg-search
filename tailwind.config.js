/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald: "Oswald, serif",
      },
      colors:{
        lightGold: '#FCF6BA',
        darkGold: '#BF953F',
        brownLogoBg: '#472D2D',
        brownLogoBgAlt1: '#562B08',
        brownLogoBgAlt2: '#8E3200',
        brownLogoBgAlt3: '#603601',
        categBg: '#DDE6ED',
        categItemBg: '#F8F6F4',
        pgMovieCardBg: '#F1F6F9'
      },
    },
  },
  plugins: [],
}

