
/** @type {import('tailwindcss').Config} */
module.exports = {
  // export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    // path tremor node_modules
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",

  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-green-white': 'linear-gradient(to top, #b9c1c2, #ffffff)',
      }),
      blur: {
        'extra-sm': '2px',
        'extra-md': '4px',
      },


    },


  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require('daisyui')
    // require("daisyui"),
  ],
}

