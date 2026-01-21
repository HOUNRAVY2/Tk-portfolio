/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: 'url(/assets/home/footer.png)',
        banner: 'url(/assets/home/sec-1.png)',
        sec2: 'url(/assets/home/sec-2.png)',
        sec3: 'url(/assets/home/sec-3.png)',
      },
      colors: {
        navbar: '#292929',
        gray1: '#D9D9D9',
        gold_1: '#FFCC4D',
        gold_2: '#ecc639',
        coca: '#F6083B',
        cool: '#BFBFBF',
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    plugin(function newCom({ addComponents }) {
      const components = {
        '.container-full': {},
        '.container-fluid': {},
        '.text-gardient': {},
        '.text-gardient2': {},
        '.colortext': {},
      };

      addComponents(components);
    }),
  ],
};
