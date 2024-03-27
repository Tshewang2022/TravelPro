/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#4dd0d4",
        darkBlue: "#102039",
      },
    },
  },
  plugins: [],
};
