import { text } from "stream/consumers"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pops:"var(--font-poppins)"
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        forebackground: "var(--forebackground)",
        background: "var(--background)",
        primary: {
          DEFAULT: "var(--primary)",
        },
        text:"var(--text)",
        green:"var(--green)",
      },
      backgroundColor: {
        primary: "var(--background)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config