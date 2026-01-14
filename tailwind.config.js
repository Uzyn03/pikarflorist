/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        beige: "#f5f0e0",
        lightBeige: "#7a7766",
        darkBeige: "#504d43",
        veryDarkBeige: "#3a3931",
        golden: "#a17137",
        white: "#ffffff",
        //pikarflorist
        cream: "#f4f7d2",
        sage: "#9CAF88",
        olive: "#6B7A5F",
        forest: "#3A5A40",
        charcoal: "#2F2F2F"
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

