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
        banner: 'url(/assets/home/bg-banner.png)',
        sec2: 'url(/assets/home/bg-02.webp)',
        sec3: 'url(/assets/home/bg-03.webp)',
      },
      colors: {
        navbar: '#292929',
        gray1: '#D9D9D9',
        gold_1: '#FFCC4D',
        gold_2: '#ecc639',
        coca: '#F6083B',
        cool: '#BFBFBF',
        heading: '#2A343A',
        paragraph: '#555C61',
        EA: '#EAEAEA',
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
