/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': ['15px', '18px'],
        'md': ['18px', '21px'],
        'xl': ['21px', '25px'],
        '2xl': ['28px', '33px'],
        '3xl': ['35px', '41px'],
        '4xl': ['40px', '47px']
      },
      colors: {
        wgray: {
          50: '#F3F3F3',
          80: '#F3F3F3',
          100: '#DADCE04D',
          150: '#DADCE0',
          200: '#D3D6DA',
          300: '#939B9F4D',
          400: '#939B9F',
          500: '#56575E',
          600: '#56575E'
        },
        wdark: {
          100: '#202537',
          150: '#DADCE008',
          200: '#262B3C',
          250: '#565F7E',
          300: '#939B9F33'
        },
        wgreen: {
          100: '#6AAA64',
          200: '#66A060',
        },
        wyellow: {
          100: '#CEB02C',
          200: '#CEB02C',
        }
      },
      fontFamily: {
        'bl': ['RobotoBlack'],
        'bold': ['RobotoBold'],
        'md': ['RobotoMedium'],
        'rg': ['RobotoRegular'],
        'lt': ['RobotoLight'],
        'thin': ['RobotoThin'],
      },
    },
  },
  plugins: [],
}

