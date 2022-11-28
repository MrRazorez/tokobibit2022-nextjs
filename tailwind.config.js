/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merienda': ['Merienda', 'serif'],
        'inter': ['Inter', 'serif']
      }
    },
  },
  plugins: [],
}