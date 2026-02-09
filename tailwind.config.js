/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fluo': '#ccff00',
        'dark-bg': '#0a0a0a',
        'dark-secondary': '#121212',
        'light-text': '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'topo': "url('/topo-pattern.svg')",
      }
    },
  },
  plugins: [],
}
