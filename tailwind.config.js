/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#ff6257',
      'dark-slate-grey': '#242742',
      'charcoal-grey': '#36384e',
      'grey': '#9294a0',
      'error': '#d32f2f',
      'orange': '#f97316',
      'success': '#42ba96'
    },
    extend: {},
  },
  plugins: [],
}

