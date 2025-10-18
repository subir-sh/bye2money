/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayscale: {
          50: "#FFFFFF",
          100: "#FBFCFD",
          200: "#F1F4F8",
          300: "#777D84",
          400: "#000000",
        },

        colorchip: { 
          "10": "#A28B78", 
          "20": "#E39D5D", 
          "30": "#D7C6AB", 
          "40": "#AACD7E", 
          "50": "#BCDDF3", 
          "60": "#C5E0EB", 
          "70": "#7DB7BF", 
          "80": "#79B2CA", 
          "90": "#73A4D0", 
          "100": "#A7B9E9", 
          "110": "#BDA6E1", 
          "120": "#C04646", 
        },

        neutral: {
          surface: {
            weak: "#FBFCFD",
            default: "#FFFFFF",
            point: "#F1F4F8",
          },
          text: {
            weak: "#777D84",
            default: "#000000",
          },
          border: {
            default: "#777D84",
          },
        },
        brand: {
          surface: { default: "#F1F4F8" },
          text: {
            income: "#79B2CA",
            expense: "#C04646",
          },
        },
        danger: {
          surface: { default: "#E9385A" },
          text: { default: "#E9385A" },
          border: { default: "#E9385A" },
        },
      },

      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
        serif: ["ChosunilboNM", "serif"],
      },

      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "24px"],
        base: ["16px", "24px"],
        lg: ["24px", "32px"],
        xl: ["48px", "56px"],
      },
    },
  },
  plugins: [],
};