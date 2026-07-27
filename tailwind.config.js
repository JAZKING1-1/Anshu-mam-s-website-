/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF9F4',
          warm: '#FFF9F4',
        },
        cream: {
          DEFAULT: '#F7F0E8',
          soft: '#F7F0E8',
          light: '#FAF5EE',
        },
        blush: {
          DEFAULT: '#EFCBD5',
          light: '#F8E8ED',
          soft: '#EFCBD5',
        },
        dustyrose: {
          DEFAULT: '#C98398',
          dark: '#B36E83',
        },
        deeprose: {
          DEFAULT: '#9C536D',
          hover: '#824259',
        },
        sage: {
          DEFAULT: '#A8B7A0',
          light: '#E2E8DE',
          dark: '#7A8C72',
        },
        matcha: {
          DEFAULT: '#D9E2C8',
          light: '#EFF4E6',
        },
        forest: {
          DEFAULT: '#3F5648',
          hover: '#2F4236',
        },
        gold: {
          DEFAULT: '#C3A36B',
          soft: '#C3A36B',
          light: '#E4D5B7',
        },
        warmcharcoal: '#2D2729',
        deepplum: '#4A2E3B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(74, 46, 59, 0.04), 0 4px 12px -2px rgba(201, 131, 152, 0.06)',
        'soft-lg': '0 20px 40px -10px rgba(74, 46, 59, 0.08), 0 8px 20px -4px rgba(168, 183, 160, 0.1)',
        'gold-accent': '0 0 20px rgba(195, 163, 107, 0.2)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
