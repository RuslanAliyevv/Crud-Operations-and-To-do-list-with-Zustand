/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};