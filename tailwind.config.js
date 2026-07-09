/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      keyframes: {
        ambient: {
          "0%,100%": {
            transform: "scale(1)",
            opacity: "0.5",
          },

          "50%": {
            transform: "scale(1.15)",
            opacity: "0.8",
          },
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },
        wave: {
          "0%": {
            transform: "scale(0.4)",
            opacity: "0.8",
          },

          "100%": {
            transform: "scale(1.3)",
            opacity: "0",
          },
        },
      },

      animation: {
        ambient: "ambient 8s ease-in-out infinite",

        float: "float 5s ease-in-out infinite",
        wave: "wave 5s infinite ease-out",
      },
    },
  },

  plugins: [],
};
