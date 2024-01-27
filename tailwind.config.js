/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito'],
        secondary: ['Spectral SC'],
      },
      colors: {
        primary: '#02CC67',
      },
    },
  },
  plugins: [],
};
