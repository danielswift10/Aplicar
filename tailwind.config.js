/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm':'500px',
        'tb':'768px',
        'lg':'1024px',
        'xl':'1280px',
        'xxl':'1440px',
      },
      colors: {
        'gray-700':'#6D6D6D',
      }
    }
  },
  plugins: [],
}
