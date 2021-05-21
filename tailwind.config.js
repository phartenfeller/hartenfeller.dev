const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
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
        ...colors,
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
    ({ addUtilities, e, theme }) => {
      const themeColors = theme('colors');

      const decorationColors = Object.keys(themeColors).reduce((acc, key) => {
        if (typeof themeColors[key] === 'string') {
          return {
            ...acc,
            [`.decoration-${e(key)}`]: {
              'text-decoration-color': themeColors[key],
            },
          };
        }

        const variants = Object.keys(themeColors[key]);

        return {
          ...acc,
          ...variants.reduce(
            (a, variant) => ({
              ...a,
              [`.decoration-${e(key)}-${variant}`]: {
                'text-decoration-color': themeColors[key][variant],
              },
            }),
            {}
          ),
        };
      }, {});

      addUtilities(decorationColors, ['group-hover']);
    },
  ],
};
