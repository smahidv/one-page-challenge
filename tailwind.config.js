// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
     extend: {
      colors: {
        primary: "#16A34A",
        secondary: "#0B6B3A",
        textColor:"#334155",
        textDark:"#0F172A",
        redDark:"#B01219",
        lightGray: "#475569",
      },
    },
  },
  plugins: [],
};
