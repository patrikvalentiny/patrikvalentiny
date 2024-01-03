/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        myThemeLight: {
          "primary": "#000000",
          "base-100": "#d02a02",
          "base-content":"#000",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
        }
      },
      {
        myThemeDark: {
          "primary": "#E5E5E5",
          "base-100": "#000",
          "base-content":"#E5E5E5",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
        }
      },

      "black", "dark", "light"]
  }
}

