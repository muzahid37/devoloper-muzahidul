module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#78add9",
          accent: "#df5646",
          warning: "#DF5646",
        },
      },
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
};
