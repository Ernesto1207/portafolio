/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../public/hero.jpg')",
        'card-image': "url('../public/img-1.webp')",
        'card-two': "url('../public/img-2.webp')",
        'card-tree':"url('../public/img-3.webp')",
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },
      fontFamily:{
        Merriweather: ['Merriweather', 'mono'],
      },
    },
  },
  plugins: [],
}