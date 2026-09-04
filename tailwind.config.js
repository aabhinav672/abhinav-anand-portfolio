/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dfe9ff",
          200: "#c6d7ff",
          300: "#a3bcff",
          400: "#7a97ff",
          500: "#5471fa",
          600: "#3d4fee",
          700: "#333dd2",
          800: "#2c34a9",
          900: "#2a3186",
          950: "#1a1d4e",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
