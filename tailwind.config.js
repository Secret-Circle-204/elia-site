/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    './src/**/*.{js,jsx,ts,tsx}',

    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '960px',
    //   xl: '1200px'
    // },
    extend: {
      colors: {
        pr2: '#0f0f0f',
        pr1: '#BD9060',
        pr3: '#dfc169',
        pr4: '#bb9e4a',
        pr5: '#252525',
        pr6: '#121112',
        pr7: '#c7ab5a',
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        semgold: '#CFB53B',
        gold1: '#AA8061',
        gold2: '#D6AA84',
        gold3: '#E6C7A2',
        blue1: '#051333',
        blue2: '#122356',
        blue3: '#030e20'
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      fontFamily: {
        Montserrat: [`var(--font-Montserrat)`, 'sans-serif'],
        poppins: [`var(--font-poppins)`, 'sans-serif']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#FFFFFF'
          }
        },
        dark: {
          colors: {
            primary: '#000000'
          }
        }
      }
    })
  ]
}

//plugins: [require('flowbite/plugin', 'tailwind-scrollbar')]

//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
