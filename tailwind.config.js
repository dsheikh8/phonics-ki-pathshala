/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#4B1F74",
          purpleDark: "#371458",
          purpleLight: "#6B329E",
          orange: "#FF8A00",
          orangeHover: "#E07900",
          yellow: "#FFD54F",
          yellowLight: "#FFF3C4",
          cream: "#FFF9F5",
          dark: "#1E112A",
          muted: "#64748B",
          lightGray: "#F8FAFC",
        }
      },
      fontFamily: {
        heading: ["Fredoka", "Quicksand", "sans-serif"],
        body: ["Outfit", "Inter", "sans-serif"],
      },
      boxShadow: {
        'brand': '0 10px 30px -5px rgba(75, 31, 116, 0.12)',
        'orange': '0 10px 25px -5px rgba(255, 138, 0, 0.3)',
        'card': '0 12px 35px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
