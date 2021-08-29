module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mercadolibre: {
          blue: '#2D3277',
          DEFAULT: '#FFF159',
          
        },
      },
    },
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
