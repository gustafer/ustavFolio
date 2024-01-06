import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  daisyui: {
    themes: [
      {
        zeroblack: {

          "primary": "#7e22ce",

          "secondary": "#a855f7",

          "accent": "#c026d3",

          "neutral": "#ffffff",

          "base-100": "#000000",

          "info": "#ffffff",

          "success": "#00ffff",

          "warning": "#ffffff",

          "error": "#ffffff",
        },
      },
      {
        zerowhite: {

          "primary": "#9333ea",

          "secondary": "#ffffff",

          "accent": "#881337",

          "neutral": "#f3f4f6",

          "base-100": "#f5f5f4",

          "info": "#00ffff",

          "success": "#4ade80",

          "warning": "#ffff00",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
export default config
