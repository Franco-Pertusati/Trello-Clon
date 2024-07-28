/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    animation: {
      marquee: "marquee 30s linear infinite",
      blink: "blink 1s step-start 0s infinite",
      blinkTransparent: "blinkTransparent 1s step-start 0s infinite",
    },
    keyframes: {},
    colors: {
      seasalt: {
        DEFAULT: "#f8f9fa",
      },
      "anti-flash_white": {
        DEFAULT: "#e9ecef",
      },
      platinum: {
        DEFAULT: "#dee2e6",
      },
      french_gray: {
        DEFAULT: "#ced4da",
      },
      french_gray: {
        DEFAULT: "#adb5bd",
      },
      slate_gray: {
        DEFAULT: "#6c757d",
      },
      outer_space: {
        DEFAULT: "#495057",
      },
      onyx: {
        DEFAULT: "#343a40",
      },
      fontent: {
        DEFAULT: "#212529",
      },
      mainColor: {
        DEFAULT: "#B5D568",
      },
      borderColor: {
        DEFAULT: "#b4d5682f",
      },
    },
  },
  plugins: [],
};
