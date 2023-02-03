import palette from "./palette"
import { opacityColors } from './opacityColors'
import { themeShadows } from "./shadows"
import { createTheme } from "@mui/material"

export default createTheme({
  palette,
  opacityColors,
  //@ts-ignore
  shadows: themeShadows,
  shadows: Array(25).fill('none') as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
})
