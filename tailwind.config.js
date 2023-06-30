/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  "./*.{html,js}"
],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        montserrat: ['Montserrat']
      }
    },
  },
  plugins: [
  ],
}

