/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  darkMode: 'class', // 👈 ici
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
