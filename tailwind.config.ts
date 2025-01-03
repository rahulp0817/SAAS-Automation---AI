import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))'
          }
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0'
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0'
          }
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)'
          }
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)'
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)'
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)'
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)'
          }
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)"
          },
          "100%": {
            opacity: "1", 
            transform: "translate(-50%,-40%) scale(1)"
          }
        }
      },
      animation: {
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'shiny-text': 'shiny-text 8s infinite',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        spotlight: "spotlight 2s ease .75s 1 forwards"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
