/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a192f',
          800: '#112240',
          700: '#233554',
        },
        primary: {
          DEFAULT: '#F97316', // Brand Orange
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        secondary: {
          DEFAULT: '#8B5CF6', // Brand Purple
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        }
      }
    },
  },
  plugins: [],
}
