/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FF914D",
        "green": "#809D7B",
        "greensoft": "#E0E8DF",
      }
    },
  },
  plugins: [],
}

