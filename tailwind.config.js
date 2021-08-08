/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: [
    // './src/**/*.tsx',
    './src/test.tsx',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
