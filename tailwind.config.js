module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    zIndex: {
      '10000': '10000'
    },
    extend: {
      backgroundImage: {
        'hero-img': 'url("./components/assets/school.jpg")'
      },
      spacing: {
        "17": "4rem",
        "18": "4.5rem"
      }

    },
  },
  plugins: [],
}