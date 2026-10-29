/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mechline: {
          blue: '#3b49df',
          'blue-hover': '#2e3bb8',
          dark: '#202020',
          black: '#111111',
          gray: '#4e4e4e',
          muted: '#767676',
          surface: '#f8f8f8',
          card: '#ededed',
          border: '#e5e5e5'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
