/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  darkMode: 'selector',
  content: ['./app/index.html','./index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

