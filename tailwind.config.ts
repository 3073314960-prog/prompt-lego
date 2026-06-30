import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10131f",
        panel: "#ffffff",
        mist: "#f4f7fb",
        cyan: "#11c5d9",
        lime: "#b8ef45",
        coral: "#ff6b5f",
      },
      boxShadow: {
        lego: "0 18px 45px rgba(29, 40, 70, 0.12)",
        glow: "0 0 0 1px rgba(17, 197, 217, 0.28), 0 18px 50px rgba(17, 197, 217, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
