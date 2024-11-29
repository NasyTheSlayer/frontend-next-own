import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterSemiBold: ["Inter Semi Bold", "sans-serif"],
        InterMedium: ["Inter Medium", "sans-serif"],
        InterRegular: ["Inter Regular", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayishBlue: "#93a0b9",
        whisperGray: "#edeef0",
        slateBlue: "#363f54",
        charcoalBlue: "#20242d",
        dustyBlue: "#5b657e",
        сoolGray: "#a1a1aa",
        blueViolet: "#7470ee",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      themes: {
        dark: {
          colors: {
            primary: "#4082F0",
            secondary: {
              DEFAULT: "#7470ee",
              foreground: "#fff",
            },
            warning: "#ff6e5f",
            success: "#22c55e",
          },
        },
      },
    }),
  ],
};
export default config;
