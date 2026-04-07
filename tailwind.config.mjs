/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFDADE',
          DEFAULT: '#FFB7B2',
          dark: '#FF9E99',
        },
        secondary: {
          DEFAULT: '#E2F0CB',
          dark: '#C6D8A4',
        },
        accent: {
          DEFAULT: '#FF8FAB',
        },
        bg: '#FAFAFA',
        text: {
          main: '#333333',
          muted: '#666666',
        }
      },
      fontFamily: {
        main: ['Outfit', 'sans-serif'],
        text: ['Inter', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.05)',
        md: '0 4px 16px rgba(0,0,0,0.08)',
        lg: '0 8px 32px rgba(255, 143, 171, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
