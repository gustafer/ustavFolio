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
        zerowhite: {

          "primary": "#9333ea",

          "secondary": "#ffffff",

          "accent": "#881337",

          "neutral": "#ededed",

          "base-100": "#f4f4f4",

          "info": "#00ffff",

          "success": "#4ade80",

          "warning": "#ffff00",

          "error": "#dc2626",
        },
      },
      {
        zeroblack: {

          "primary": "#7e22ce",

          "secondary": "#a855f7",

          "accent": "#c026d3",

          "neutral": "#050505",

          "base-100": "#000000",

          "info": "#ffffff",

          "success": "#00ffff",

          "warning": "#ffffff",

          "error": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
export default config
