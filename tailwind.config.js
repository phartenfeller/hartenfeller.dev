const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      cursor: {
        'zoom-in': 'zoom-in',
      },
      opacity: {
        94: '.94',
      },
      height: {
        100: '25rem;',
      },
      screens: {
        hd: '1900px',
        xxl: '2400px',
      },
      colors: {
        'title-brown': '#3e2121',
        'title-brown-light': '#544242',
        cappuccino: '#93776c',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const customClasses = {
        '.translate-z-0': {
          transform: 'translateZ(0)',
        },
      };

      addUtilities(customClasses, ['motion-reduce']);
    }),
    require('@tailwindcss/line-clamp'),
  ],
};
