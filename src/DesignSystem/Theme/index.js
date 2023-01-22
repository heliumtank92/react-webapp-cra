import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import getColorSchemes from './colorSchemes'
import getTypography from './typography'
import breakpoints from './breakpoints'
import getComponents from './components'
import { SPACE_COEFFICIENT } from './spacing'

export default function getTheme (colorPalette, fontFamilyName = '') {
  const colorSchemes = getColorSchemes(colorPalette)
  const { typography, dsTypo, calculateLinerHeight } = getTypography(fontFamilyName)
  const components = getComponents(dsTypo, calculateLinerHeight)

  const themeConfig = {
    cssVarPrefix: '',
    components,
    breakpoints,
    colorSchemes,
    typography,
    spacing: (input) => input * SPACE_COEFFICIENT
  }

  const theme = extendTheme(themeConfig, themeConfig)
  window.theme = theme
  return theme
}
