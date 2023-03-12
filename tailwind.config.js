/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC5803'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        primary: '#CC5803'
    }
  }]
  }
}
