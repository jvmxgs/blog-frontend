/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue}",
    "./index.html",
  ],
  theme: {
    extend: {
        colors: {
            'east-bay': '#404e67',
            'ghost-white': '#f6f7fb',
            'link-water': '#cecfd1',
            'frosty-green': '#505458',
            'old-mill': '#353c4e',
        }
    },
    fontFamily: {
      'albert-sans': ['Albert Sans', 'sans-serif']
    }
  },
  plugins: [],
}
