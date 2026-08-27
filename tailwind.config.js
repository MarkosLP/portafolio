/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#060816',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        display: ['"Sora"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(15, 23, 42, 0.35)',
        card: '0 18px 60px rgba(15, 23, 42, 0.22)',
      },
    },
  },
  plugins: [],
}
