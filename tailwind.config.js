module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      opacity: {
        '94': '.94'
      },
      height: {
        '100': '25rem;'
      }
    }
  },
  variants: {
    scale: ['group-hover']
  },
  plugins: []
};
