/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sun-yellow': '#FFD84D',
        'orchid-purple': '#7C5CFF',
        'rose-pink': '#FF6FAE',
        'soft-cream': '#FFFDF7',
        'card-white': '#FFFFFF',
        'lavender-tint': '#F4F1FF',
        'text-primary': '#1F1F2E',
        'text-secondary': '#4B4B6A',
        'text-muted': '#7A7AA3',
        'border-soft': '#E6E3F3',
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
