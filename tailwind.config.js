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
        darkGold: '#BF953F'
      },
    },
  },
  plugins: [],
}

