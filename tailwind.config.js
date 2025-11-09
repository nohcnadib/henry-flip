/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chinese: ['"Chinese Rocks"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
