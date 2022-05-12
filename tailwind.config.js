module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 5px -1px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.8)',
        // '3xl': '0 5px 5px -1px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'big': '0px 15px 45px 0px rgba(0, 0, 0, 0.568), 0px 15px 75px 0px black',
        'inner-3xl-bottom': '0 -5px 5px -1px rgba(0, 0, 0, 0.5) inset, 0 -4px 6px -2px rgba(0, 0, 0, 0.2) inset',
        'answers': '0 2px 5px -1px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'answers-inner': '0 2px 3px rgba(0, 0, 0, 0.5) inset',
        '3xlt': '0 -10px 10px -3px rgba(0, 0, 0, 0.3), 0px -4px 6px -2px rgba(0, 0, 0, 0.2)',
        '4xl': '0 0 5px 2px rgba(0, 0, 0, 0.6), 0 0 4px 6px rgba(0, 0, 0, 0.3)',
        '5xl': '0 14px 18px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
        'inner-xl': '0 2px 7px  black inset',
        'inner-none': '0 0 0 inset',
        'preview': '0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)',
        'preview2': '0 62.5px 125px -25px rgba(0, 0, 0, 0.7), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)',
      },
      dropShadow: {
        '3xl-black': '0 0 7px black',
        '3xl-white': '0 0 7px white',
      }
    },
  },
  plugins: [],
}
