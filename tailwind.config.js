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
          DEFAULT: '#FDF7FB',
          soft: '#FDF7FB',
          light: '#FFF9FD',
        },
        boldpink: {
          DEFAULT: '#D81B60',
          dark: '#C2185B',
          deep: '#880E4F',
          light: '#F8BBD0',
          vibrant: '#E91E63',
        },
        royalpurple: {
          DEFAULT: '#6A1B9A',
          deep: '#4A148C',
          dark: '#3B0A66',
          light: '#E1BEE7',
          vibrant: '#8E24AA',
        },
        orchid: {
          DEFAULT: '#AB47BC',
          soft: '#CE93D8',
          vibrant: '#BA68C8',
        },
        sage: {
          DEFAULT: '#7B9E87',
          light: '#E5EDE0',
          dark: '#4D6B57',
        },
        gold: {
          DEFAULT: '#FFD700',
          soft: '#E6C200',
          light: '#FFF59D',
        },
        warmcharcoal: '#261B23',
        deepplum: '#3D0D2E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(74, 20, 140, 0.08), 0 4px 12px -2px rgba(216, 27, 96, 0.12)',
        'soft-lg': '0 20px 40px -10px rgba(74, 20, 140, 0.15), 0 8px 24px -4px rgba(216, 27, 96, 0.25)',
        'purple-glow': '0 0 30px rgba(106, 27, 154, 0.35)',
        'pink-glow': '0 0 35px rgba(216, 27, 96, 0.4)',
        'gold-glow': '0 0 25px rgba(255, 215, 0, 0.4)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
