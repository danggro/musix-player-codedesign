/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B1B1B",
        secondary: "#424242",
        blue: "#71C6FF",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "ui-system"],
      },
    },
  },
  plugins: [],
};
