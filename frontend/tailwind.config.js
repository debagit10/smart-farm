/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "#CFD2CD",
      },
      colors: {
        success: "#30D42B",
      },
    },
  },
  plugins: [],
};
