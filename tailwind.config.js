module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "991px",
      lg: "1281px",
      xl: "1536px",
    },
    extend: {
      screens: {
        xs: { min: "320px", max: "567px" },
      },
      colors: {
        headingclr: "#0A2134",
        headblue: "#2699FB",
        iconcorl: "#2699fb",
        txt: "#43505B",
        high: "#0A2134",
        gry: "#F2F4F7",
        fbg: "#0A2540",
      },
      fontFamily: {
        fnt: ['"Inter"'],
      },
    },
  },
  plugins: [],
};
