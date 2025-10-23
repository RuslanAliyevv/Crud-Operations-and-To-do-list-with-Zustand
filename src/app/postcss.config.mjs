const { heroui } = require("@heroui/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#0072f5",
            // digər rənglər
          },
        },
        dark: {
          colors: {
            primary: "#0072f5",
            // digər rənglər
          },
        },
      },
    }),
  ],
};

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;