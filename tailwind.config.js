const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      blue: {
        100: '#eff8ff',
        200: '#aad4f5',
        300: '#63a2d8',
        400: '#3083c8',
        500: '#2268a2',
        600: '#1a4971',
        700: '#1f3d54',
      },
      gray: {
        100: '#f8f9fa',
        200: '#e1e7ec',
        300: '#cfd6de',
        400: '#b8c4ce',
        500: '#8894a7',
        600: '#5f6b7a',
        700: '#202934',
      },
      green: {
        100: '#e6fffe',
        200: '#a8eeeb',
        300: '#6fd7d3',
        400: '#3caea3',
        500: '#299187',
        600: '#1a655e',
        700: '#114544',
      },
      yellow: {
        100: '#fffcf4',
        200: '#fdf3d7',
        300: '#fae29f',
        400: '#f4ca64',
        500: '#caa53d',
        600: '#8b6d1f',
        700: '#5c4813',
      },
      red: {
        100: '#fce8e8',
        200: '#f5a9aa',
        300: '#e46464',
        400: '#dc3030',
        500: '#b72020',
        600: '#891b1b',
        700: '#611818',
      },
    },
  },
  corePlugins: {
    // ...
    listStyleType: false,
  },
};
