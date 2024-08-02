/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cor1': '#93c5fd',
        'cor2': '#f9a8d4', 
      },
    },
  },
  plugins: [],
}
