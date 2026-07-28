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
          glow: '#FFFDF9',
        },
        cream: {
          DEFAULT: '#F7F0E8',
          soft: '#F7F0E8',
          light: '#FAF5EE',
        },
        blush: {
          DEFAULT: '#E89BB6',
          light: '#FCEBF1',
          soft: '#E89BB6',
          vibrant: '#F3B4C8',
        },
        dustyrose: {
          DEFAULT: '#C95D86',
          dark: '#B24B73',
        },
        deeprose: {
          DEFAULT: '#7D2548',
          hover: '#661C39',
          vibrant: '#C95D86',
        },
        sage: {
          DEFAULT: '#98B08D',
          light: '#E5EDE0',
          dark: '#6E8A63',
        },
        matcha: {
          DEFAULT: '#CDE0B7',
          light: '#F0F7E6',
        },
        forest: {
          DEFAULT: '#2F4737',
          hover: '#1F3326',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#C8A96A',
          light: '#F4E6B6',
        },
        warmcharcoal: '#2D2729',
        deepplum: '#3D1F2D',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(61, 31, 45, 0.06), 0 4px 12px -2px rgba(201, 93, 134, 0.08)',
        'soft-lg': '0 20px 40px -10px rgba(61, 31, 45, 0.1), 0 8px 20px -4px rgba(152, 176, 141, 0.15)',
        'gold-accent': '0 0 25px rgba(212, 175, 55, 0.25)',
        'rose-glow': '0 0 30px rgba(232, 155, 182, 0.35)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
