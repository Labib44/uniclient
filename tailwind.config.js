/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        
        primary:"#FAFAFA",
        secondary: "#0EA5E9",
        accent: "#B7B8BB",
        
    },
    },
  },
  plugins: [require("daisyui")],
}

