/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'media',
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
}
