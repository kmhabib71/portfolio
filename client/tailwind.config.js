/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"], // This enables the 'dark' variant,
  // darkMode: "media", // This enables the 'light' variant,
  theme: {
    extend: {
      colors: {
        dprimary: "#ff5722", // d for dark and bg for background
        dsecondarybg: "#0a090d",
        dcardbg: "#141316",
      },
      animation: {
        moveTopRight: "moveTopRight 1s 1",
      },
    },
  },
  plugins: [],
};
