import { createTheme } from "@kuma-ui/core"

const theme = createTheme({
  colors: {
    blue: "#5162ff",
  },
  breakpoints: {
    md: "768px",
  },
  sizes: {
    navHeight: "80px",
    maxWidth: "1260px",
  },
})

type UserTheme = typeof theme

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme
