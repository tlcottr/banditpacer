/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GroteskRegular: ["grotesk-regular", "decorative"],
        GroteskMedium: ["grotesk-medium", "decorative"],
        GroteskBold: ["grotesk-bold", "decorative"],
      },
    },
  },
  plugins: [],
};
