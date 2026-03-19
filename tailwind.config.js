/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Důležité pro funkční přepínání témat
  theme: {
    extend: {
      colors: {
        amber: { 400: '#fbbf24', 500: '#f59e0b' },
        blue: { 600: '#2563eb', 700: '#1d4ed8' }
      }
    },
  },
  plugins: [],
}
