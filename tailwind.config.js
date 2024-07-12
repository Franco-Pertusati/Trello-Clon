module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      main: {
        DEFAULT: "#0066a0",
      },
      main2: {
        DEFAULT: "#0079bf",
      },
      main3: {
        DEFAULT: "#5AB4F8",
      },
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
