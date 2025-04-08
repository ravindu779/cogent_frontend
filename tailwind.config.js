/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          primary: '#F97316',   // dark blue
          accent: '#F97316',    // orange
          fontFamily: {
            sans: ["'Open Sans'", "sans-serif"],
          },
        },
      },
    },
    
    extend: {},
  plugins: [],
} 

