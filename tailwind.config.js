/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        custom1: '#1E1B3A',
        custom2: '#3746C1',
        custom3: '#452ed6',
        custom4: '#6b5dd3',
        custom5: '#005B41',

        custom6: '#f08080',
        custom7: '#3529a5',
        custom8: '#4b4dff',
        customGray1: '#9d9d9d'
      },
      fontFamily: {
        Regular: ['lobster-regular'],
        Bold: ['lobster-bold']
      }
    }
  },
  plugins: []
};
