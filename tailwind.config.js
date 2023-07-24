/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'lobsterTwo':'Lobster Two, cursive',
    },
    extend: {
      backgroundImage: {
        navBg: "url('/src/imgs/Shopping7Cropped.png')",
      },
    },
  },
  plugins: [],
};
