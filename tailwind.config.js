import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "8px", 
          medium: "12px", 
          large: "16px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#f8f9fc"
            },
            primary: {
              50: "#18230F",
              100: "#27391C",
              200: "#255F38",
              300: "#1F7D53",
              400: "#1F7D53",
              500: "#1F7D53",
              600: "#255F38",
              700: "#27391C",
              800: "#18230F",
              900: "#18230F",
              DEFAULT: "#1F7D53",
              foreground: "#ffffff"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#0f172a"
            },
            content1: {
              DEFAULT: "#1e293b",
              foreground: "#f8fafc"
            },
            content2: {
              DEFAULT: "#334155",
              foreground: "#f1f5f9"
            },
            primary: {
              50: "#18230F",
              100: "#27391C",
              200: "#255F38",
              300: "#1F7D53",
              400: "#1F7D53",
              500: "#1F7D53",
              600: "#255F38",
              700: "#27391C",
              800: "#18230F",
              900: "#18230F",
              DEFAULT: "#1F7D53",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
