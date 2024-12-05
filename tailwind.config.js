module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1220px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        "primary-accent": {
          400: "#e6aa32",
        },
        "secondary-accent": {
          400: "#797C86",
        },
      },
    },
  },
  plugins: [],
};
