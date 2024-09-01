/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark : '#1e1e1e',
        darkHead : '#1d2229', 
      },
      padding : {
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}

