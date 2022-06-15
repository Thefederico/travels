module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        bali: "url('/public/assets/img/bali.jpg')",
        chicago: "url('/public/assets/img/chicago.jpg')",
        europe: "url('/public/assets/img/europe.jpg')",
        iceland: "url('/public/assets/img/iceland.jpg')",
        losAngeles: "url('/public/assets/img/LA.jpg')",
        miami: "url('/public/assets/img/miami.jpg')",
        newYork: "url('/public/assets/img/new_york.jpg')",
        norway: "url('/public/assets/img/norway.jpg')",
        sanFrancisco: "url('/public/assets/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('/public/assets/img/sanFranciscoDesktop.jpg')",
        seattle: "url('/public/assets/img/seattle.jpg')",
        switzerland: "url('/public/assets/img/switzerland.jpg')",
        sydney: "url('/public/assets/img/sydney.jpg')",
        yosemite: "url('/public/assets/img/yosemite.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#535c6a",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [
    /* require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'), */
  ],
};
