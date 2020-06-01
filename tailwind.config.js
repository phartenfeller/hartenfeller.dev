module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      opacity: {
        '94': '.94',
      },
      height: {
        '100': '25rem;',
      },
      screens: {
        hd: '1900px',
      },
      colors: {
        'title-brown': '#3e2121',
      },
    },
  },
  variants: {
    scale: ['hover', 'group-hover'],
  },
  plugins: [],
};
