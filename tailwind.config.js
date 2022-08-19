module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(245, 247, 250, 0.5), rgba(245, 247, 250, 0.5)), url('https://assetscdn1.paytm.com/frontendcommonweb/69678bc5.png')",
      },
      colors: {
        ptmblue: "rgb(0,186,242)",
        ptmblue2: "rgb(15,74,138)",
        ptmlightblue: "rgb(240,251,255)",
        ptmcardblue: "rgb(102,214,255)",
        ptmdarkblue: "rgb(0,41,112)",
        ptmgray: "rgb(245,247,250)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
