import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        newmoon: {

          "primary": "#6b21a8",

          "secondary": "#c026d3",

          "accent": "#1d4ed8",

          "neutral": "#2a1717",

          "base-100": "#000000",

          "base-200": "#030303",

          "info": "#007dff",

          "success": "#009441",

          "warning": "#fcd34d",

          "error": "#be185d",
        },
        newsun: {

          "primary": "#6b21a8",

          "secondary": "#c026d3",

          "accent": "#1d4ed8",

          "neutral": "#2a1717",

          "base-100": "#ffffff",

          "base-200": "#f7f7f7",

          "info": "#007dff",

          "success": "#009441",

          "warning": "#fcd34d",

          "error": "#be185d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
