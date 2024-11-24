/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* Add new xs breakpoint: */
    extend: {
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}