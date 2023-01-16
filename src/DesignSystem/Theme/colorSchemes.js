import dsRules from './rules'
import { dsSpacingCssVars } from './spacing'

export default function getColorSchemes (colorPalette = {}) {
  const light = (colorPalette.light && getModeColorScheme(colorPalette.light, 'light')) || {}
  const dark = (colorPalette.dark && getModeColorScheme(colorPalette.dark, 'dark')) || {}

  return { light, dark }
}

function getModeColorScheme (colorPalette, mode) {
  const {
    primary,

    secondary1,
    secondary2,
    secondary3,
    secondary4,
    secondary5,

    black,
    blackLight,
    white,

    grey1,
    grey2,
    grey3,
    grey4,
    grey5,
    grey6,
    grey7,
    grey8,
    grey9,
    grey10,

    tertiary1,
    tertiary2,
    tertiary3,
    tertiary4,
    tertiary5,
    tertiaryLight,
    tertiaryExtraLight,

    negative,
    negativeLight,

    positive,
    positiveLight,

    pending,
    pendingLight,

    warning,
    warningLight,

    variable,
    variableLight,
    variableExtraLight,

    typical,
    typicalLight
  } = colorPalette

  const dsColor = {
    actionPrimary: primary,
    actionSecondary: secondary1,
    actionTertiary: tertiary1,

    surfaceBackground: mode === 'light' ? white : black,
    surfacePrimary: mode === 'light' ? white : blackLight,
    surfaceSecondary: mode === 'light' ? grey10 : grey1,
    surfaceTertiary: mode === 'light' ? grey1 : grey10,

    typoPrimary: mode === 'light' ? blackLight : grey10,
    typoSecondary: mode === 'light' ? grey3 : grey8,
    typoTertiary: mode === 'light' ? grey5 : grey6,
    typoActionPrimary: primary,
    typoActionSecondary: secondary1,
    typoActionTertiary: tertiary1,
    typoOnSurface: white,
    typoDisabled: mode === 'light' ? grey6 : grey5,
    typoTypical: typical,

    neutral1: variableExtraLight,
    neutral2: tertiaryExtraLight,
    neutral3: variableLight,

    iconSupportNegative: negative,
    iconSupportPositive: positive,
    iconSupportWarning: warning,
    iconActionPrimary: primary,
    iconActionSecondary: secondary1,
    iconActionTertiary: tertiary1,
    iconOnSurface: white,
    iconDisabled: mode === 'light' ? grey6 : grey5,
    iconDefault: mode === 'light' ? grey1 : white,
    iconTypical: typical,

    strokeDefault: mode === 'light' ? grey8 : grey3,
    strokeHover: secondary4,
    strokeDisabled: mode === 'light' ? grey6 : grey5,
    strokeActive: mode === 'light' ? grey1 : grey10,

    interactiveFocusState: tertiary1,
    interactiveActiveState: tertiary3,
    interactiveDefaultState: tertiary4,
    interactiveHoverState: tertiary5,
    interactiveBackground: mode === 'light' ? tertiaryExtraLight : tertiaryLight,

    supportNegative: negative,
    supportPositive: positive,
    supportPending: pending,
    supportWarning: warning,
    supportVariable: variable,
    supportTypical: typical,

    supportNegativeNeutral: negativeLight,
    supportPositiveNeutral: positiveLight,
    supportPendingNeutral: pendingLight,
    supportWarningNeutral: warningLight,
    supportDefaultNeutral: typicalLight,

    stateDisabledSurface: mode === 'light' ? grey9 : grey1,
    stateUnselected: mode === 'light' ? grey6 : grey5,
    stateHover: mode === 'light' ? hexToRgbA(secondary2, 0.08) : hexToRgbA(secondary4, 0.2),
    statePressed: mode === 'light' ? hexToRgbA(secondary1, 0.12) : hexToRgbA(secondary3, 0.25),
    stateTimed: secondary4,
    unselectedHover: mode === 'light' ? hexToRgbA(grey6, 0.12) : hexToRgbA(grey6, 0.2),
    unselectedPressed: mode === 'light' ? hexToRgbA(grey6, 0.16) : hexToRgbA(grey6, 0.25),

    overlay: hexToRgbA(black, 0.5)
  }

  const palette = {
    // mode,
    common: {
      black,
      white
    },
    primary: {
      main: dsColor.actionPrimary,
      contrastText: dsColor.typoOnSurface
    },
    secondary: {
      main: dsColor.actionSecondary,
      contrastText: dsColor.typoOnSurface
    },
    tertiary: {
      main: dsColor.actionTertiary,
      contrastText: dsColor.typoOnSurface
    },
    error: {
      main: dsColor.supportNegative,
      contrastText: dsColor.typoOnSurface
    },
    warning: {
      main: dsColor.supportWarning,
      contrastText: dsColor.typoOnSurface
    },
    pending: {
      main: dsColor.supportPending,
      contrastText: dsColor.typoOnSurface
    },
    info: {
      main: dsColor.supportVariable,
      contrastText: dsColor.typoOnSurface
    },
    success: {
      main: dsColor.supportPositive,
      contrastText: dsColor.typoOnSurface
    },
    surface: {
      main: dsColor.surfaceBackground,
      contrastText: dsColor.typoPrimary
    },
    grey: {
      50: grey1,
      100: grey2,
      200: grey3,
      300: grey4,
      400: grey5,
      500: grey6,
      600: grey7,
      700: grey8,
      800: grey9,
      900: grey10,
      A100: grey1,
      A200: grey2,
      A400: grey4,
      A700: grey7
    },
    text: {
      primary: dsColor.typoPrimary,
      secondary: dsColor.typoSecondary,
      tertiary: dsColor.typoTertiary,
      disabled: dsColor.typoDisabled,
      icon: dsColor.iconOnSurface
    },
    divider: dsColor.strokeDefault,
    background: {
      default: dsColor.surfaceBackground,
      paper: dsColor.surfaceSecondary
    }
    // action: {
    //   active: tertiary3,
    //   hover: tertiary5,
    //   hoverOpacity: 1,
    //   selected: tertiary4,
    //   selectedOpacity: 1,
    //   disabled: dsColor.typoOnSurface,
    //   disabledBackground: dsColor.stateUnselected,
    //   disabledOpacity: 1,
    //   focus: tertiary1,
    //   focusOpacity: 1,
    //   activatedOpacity: 1
    // }
  }

  const ds = {
    color: dsColor,
    spacing: dsSpacingCssVars,
    rules: dsRules
  }
  return { palette, ds }
}

function hexToRgbA (hexCode, alpha = 1) {
  if (/^#([A-Fa-f0-9]{6})$/.test(hexCode)) {
    const hex = hexCode.replace('#', '0x')
    return `rgba(${(hex >> 16) & 255},${(hex >> 8) & 255},${hex & 255},${alpha})`
  }
  return hexCode
}
