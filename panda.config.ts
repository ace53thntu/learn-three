import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

// https://panda-css.com/docs/concepts/writing-styles#global-styles
const globalCss = defineGlobalStyles({
  html: {
    bg: {
      _default: "white",
      _osDark: "black",
    },
  },
  body: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          inter: { value: "var(--font-inter)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss,
});
