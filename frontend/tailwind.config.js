/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "landing-img": "url('./Images/bg1.jpg')",
      }),
    },
  },
  plugins: [require("daisyui")],
};
