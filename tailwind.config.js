/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      lightGold: '#FCF6BA',
      darkGold: '#BF953F'
    },
    extend: {
      fontFamily:{
        oswald: "Oswald, serif",
      }
    },
  },
  plugins: [],
}

