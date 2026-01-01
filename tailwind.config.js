/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#21212D',
        'slate-dark': '#2C2C38',
        'charcoal': '#23232F',
        'gunmetal': '#2C2C38',
        'purple-muted': '#645FC6',
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible Mono", "sans-serif"]
      }
    },
  },
  plugins: [],
}