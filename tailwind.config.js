/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
        robotomono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: "#3A17E8",
        secondary: "#E8A417",
        hitam: "#1A1A1A",
        putih: "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
