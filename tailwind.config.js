/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#6d28d9',
        secondary: '#a855f7',
         grayLight:"#d4d4d8",
         grayDark:"#111827",
         textPurple:"#faf5ff",
    },
    },
  },
  plugins: [],
};





