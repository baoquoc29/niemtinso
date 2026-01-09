/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary-purple': '#4c1d95',
        'primary-orange': '#ff6b35',
        'primary-red': '#e63946',
      },
    },
  },
  plugins: [],
}
