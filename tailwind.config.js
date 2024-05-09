module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_cc: "#ffffffcc" },
        gray: {
          50: "#f5f7ff",
          100: "#f4f4f4",
          200: "#efefef",
          400: "#c9c9c9",
          500: "#9e9d9d",
          600: "#717171",
          "200_01": "#eaeaea",
          "900_02": "#1c1c1c",
          "900_01": "#002d17",
          "500_01": "#a5a3a0",
          "300_63": "#ddefe063",
          "600_02": "#818181",
          "600_01": "#827a7a",
        },
        green: { 50: "#e8eee7", 600: "#2ca950" },
        blue_gray: { 100: "#cccccc", 600: "#617275", "100_01": "#d7d7d7" },
        black: { 900: "#000000", "900_05": "#00000005" },
        indigo: { A200: "#527ff1" },
        red: { A700: "#ff0808" },
        gray_300_01: "#e3e3e3",
      },
      boxShadow: {
        xs: "0px 23.63px 37px 0px #1e1e1e16",
        sm: "0px 22.59px 36px 0px #1e1e1e16",
        md: "0px 15.21px 35px 0px #00000016",
      },
      backgroundImage: { gradient: "linear-gradient(136deg, #1c1c1c,#444444)" },
      fontFamily: { manrope: "Manrope", coveredbyyourgrace: "Covered By Your Grace", switzer: "Switzer" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};