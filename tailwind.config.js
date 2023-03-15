/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik"'],
      },
      colors: {
        'primary-green':'#BAD532',
        'primary-blue':'#2F4858',
      }
    },
  },
  plugins: [],
}
