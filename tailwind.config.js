const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lalezar': ['Lalezar']
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    rtl: true,
    themes: false,
  },
}
