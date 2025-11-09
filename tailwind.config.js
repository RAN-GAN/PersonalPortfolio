/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Outfit",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#0f172a",
        secondary: "#334155",
        muted: "#64748b",
        accent: "#f472b6",
        "link-blue": "#10a2f5",
        "link-green": "#24d05a",
        "link-yellow": "#e9bc3f",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
    },
  },
  plugins: [],
};
