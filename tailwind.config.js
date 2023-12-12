/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}', // Dies sagt Tailwind, wo es nach Klassen suchen soll
  ],
  theme: {
    extend: {
      colors: {
        tradewind: '#1f504e',
      },
    },
  },
  plugins: [],
}
