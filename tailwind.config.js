/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "off-white": "#F5F7FA",
      "off-gray": "#232F43",
      green: "#0C6E4F",
      "off-lite": "#B2C1D9",
      lite: "#D9D9D9",
      "bg-grey": "#f9faf5",
      "lite-gray": "#828282",
      "deep-green": "#03654C",
      "green-light": "#009580",
      "deep-brownish": "#BF8943",
      "wheat-lite": "#E7E7E7",
      "sky-off": "#21293B",
      "dark-green": "#1B4D3E",

      // 'wheat-lite': '#E7E7E7',

      // 'wheat-lite': '#E7E7E7',
      // 'wheat-lite': '#E7E7E7',
      // 'wheat-lite': '#E7E7E7',
      // 'wheat-lite': '#E7E7E7',
    },
    fontFamily: {
      messiri: ["El Messiri"],
      poppin: ["Poppins"],
      Montserrat: ["Montserrat"],
      PlusJakartaSans: ["Plus Jakarta Sans"],
    },
    extend: {
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-medium": "0 2px 4px rgba(0, 0, 0, 0.2)",
        "custom-dark": "0 2px 10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
