/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}', './index.html', './src/*.vue'],
  theme: {
    extend: {
      colors: {
        'main-dark': '#0c0c0c'
      }
    }
  },
  plugins: []
}
