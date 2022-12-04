/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../src/assets/images/gym0.jpg')",
        'workout': "url('../src/assets/images/main.jpg)",
      },
    },
  },
  plugins: [],
}


// backgroundImage: {
//   'main': "url('../src/assets/images/bg.png')"
// },