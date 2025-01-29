/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "!./node_modules/**/*"],

  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        "orange-sunset": "#F27F1B",
        peach: "#F28444",
        "golden-yellow": "#EAA866",
        "natural-stone": "#525252",
        coral: "#F27052",
        "olive-green": "#717345",
        cream: "#F2DEC4",
      },
    },
  },
  plugins: [],
};
