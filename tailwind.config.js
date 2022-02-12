module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        homepage : " 25% 75% ",
        sideBar : " 4% 96% "
      }
    },
  },
  plugins: [],
}
