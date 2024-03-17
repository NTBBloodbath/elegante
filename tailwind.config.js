/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["../../content/**/*.md", "layouts/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        md: "0.9rem",
      },
      colors: {
        base: "var(--base)",
        surface: "var(--surface)",
        overlay: "var(--overlay)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        text: "var(--text)",
        "highlight-low": "var(--hightlight-low)",
        "highlight-med": "var(--hightlight-med)",
        "highlight-high": "var(--hightlight-high)",
        love: "var(--love)",
        gold: "var(--gold)",
        rose: "var(--rose)",
        pine: "var(--pine)",
        foam: "var(--foam)",
        iris: "var(--iris)",
      },
      borderColor: (theme) => ({
        DEFAULT: theme("colors.overlay", "currentColor"),
      }),
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
