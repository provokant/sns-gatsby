const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "h1": { fontSize: theme("fontSize.2xl"), marginBottom: theme("spacing.10") },
        "h2": { fontSize: theme("fontSize.xl"), marginBottom: theme("spacing.8") },
        "h3": { fontSize: theme("fontSize.lg"), marginBottom: theme("spacing.6") },
        "p": { marginBottom: theme("spacing.12") },
      })
    })
  ],
}
