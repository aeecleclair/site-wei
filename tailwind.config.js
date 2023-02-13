/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 40s linear infinite",
        marquee2: "marquee2 40s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            filter: "blur(10px)",
            transform: "translatex(-100%)",
          },
          "100%": {
            opacity: 1,
            // filter: "blur(0px)",
            transform: "translatex(0%)",
          },
        },
      },
    },
  },
};
