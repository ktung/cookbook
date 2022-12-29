/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco']
    },
    extend: {
      colors: {
        'grey': {
          400: '#575757'
        },
        'orange': {
          400: 'hsl(37, 100%, 53%)',
        },
        'yellow': {
          400: 'hsl(43, 100%, 69%)',
        }
      }
    },
  },
  plugins: [],
}
