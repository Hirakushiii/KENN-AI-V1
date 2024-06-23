/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./app/index.html','./index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

