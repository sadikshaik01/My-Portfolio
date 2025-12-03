/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'anime-primary': {
          DEFAULT: '#A8C5FF',
          50: '#EEF5FF',
          100: '#D6EAFF',
          200: '#A9D3FF',
          300: '#7DBEFF',
          400: '#529EFF',
          500: '#277EFF',
          600: '#1E64D9',
          700: '#174EA6',
          800: '#103A7A',
          900: '#0A284F'
        },
        'anime-secondary': '#FFD6A5',
        'anime-accent': '#E7D9FF',
        'anime-bg': '#FFFFFF',
        'anime-surface': '#F9F9FC'
      },
      fontFamily: {
        heading: ['Orbitron', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'anime-soft': '0 2px 10px rgba(168,197,255,0.15)',
        'anime-md': '0 4px 20px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        'anime-sm': '6px',
        'anime-md': '12px',
        'anime-lg': '20px'
      }
    }
  },
  plugins: []
}
