const BUILD_LIB = process.env.BUILD_LIB === "true";

/** @type {import('tailwindcss').Config} */
export default {
  // Dynamic scanning when compiling for dev or prod
  content: BUILD_LIB
    ? ["./lib/**/*.{html,css,jsx,tsx}"]
    : ["./lib/**/*.{html,css,jsx,tsx}", "./src/**/*.{html,css,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
