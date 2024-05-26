/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#6726e0',
        secondary: '#a855f7',
         grayLight:"#d4d4d8",
         grayDark:"#111827",
         textPurple:"#faf5ff",
         lightPurple:"#9394b2",
    },
    },
  },
  plugins: [],
};





