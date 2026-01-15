/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        //shelby florist
        beige: "#f5f0e0",
        lightBeige: "#4a5568",
        darkBeige: "#1e3a5f",
        veryDarkBeige: "#0f2942",
        golden: "#3b82f6",
        white: "#ffffff",
        //pikarflorist
        cream: "#f0f8ff",
        sage: "#9CAF88",
        olive: "#6B7A5F",
        forest: "#3A5A40",
        charcoal: "#2F2F2F",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

