/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      newsreader: ['Newsreader-VariableFont', 'sans-serif'],
      newsreaderItalic: ['Newsreader-Italic-VariableFont'],
      montreal: ['Neue-Montreal-Medium', 'sans-serif'],
      delight: ['Neue-Montreal-Regular-400', 'sans-serif'],
    },
    extend: { 
      animation: {
        spin: 'spin 10s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
