/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D1E',
          900: '#0B132B',
          850: '#0F1A3A',
          800: '#1C2541',
          700: '#26345A',
          600: '#3A4D7C',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        charcoal: {
          950: '#0B0D13',
          900: '#12151B',
          800: '#1E232E',
          700: '#2B3242',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.25)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.2)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
