/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "false",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
