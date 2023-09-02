/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      'dark-blue': 'hsl(238, 29%, 16%)',
      'soft-red': 'hsl(14, 88%, 65%)',
      'soft-violet': 'hsl(273, 75%, 66%)',
      'soft-blue': 'hsl(240, 73%, 65%)',
      'dark-grayish-blue': 'hsl(237, 12%, 33%)',
      'semi-dark-grayish-blue': 'hsl(240, 6%, 50%)',
      'light-grayish-blue': 'hsl(240, 5%, 91%)'
    },
    fontFamily: {
      'kumbh-sans': 'Kumbh Sans, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

