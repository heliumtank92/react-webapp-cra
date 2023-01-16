export default function getTypography (fontFamilyName = '') {
  const dsTypoPrimitive = {
    primaryFont: fontFamilyName,

    fontsizeScorched: '76px',
    fontsizeTorrid: '56px',
    fontsizeBlazzing: '48px',
    fontsizeHot: '44px',
    fontsizeTropical: '40px',
    fontsizeWarm: '32px',
    fontsizeMild: '24px',
    fontsizeCool: '20px',
    fontsizeCold: '18px',
    fontsizeBittercold: '16px',
    fontsizeFrigid: '14px',
    fontsizeFrostbite: '12px',
    fontsizeBlizzard: '11px',
    fontsizeIceage: '10px',

    fontweightRegular: 400,
    fontweightSemibold: 600,
    fontweightBold: 700,
    fontweightBolditalic: 700,

    lineheightIceage: '10px',
    lineheightGlacial: '8px',
    lineheightGelid: '6px',
    lineheightQuickfreeze: '4px',
    lineheightDeepfreeze: '2px',
    lineheightZero: '0px',

    characterspacingArctic: 1,
    characterspacingAlps: 0.32,
    characterspacingHindukush: 0.24,
    characterspacingHimalayas: 0.16,
    characterspacingZero: 0,

    paragraphspacing: '0px',
    casingUppercase: 'uppercase',
    casingNone: 'none'
  }

  const dsTypoComposite = {
    headingBoldExtralarge: {
      fontWeight: dsTypoPrimitive.fontweightBold,
      fontSize: dsTypoPrimitive.fontsizeWarm,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeWarm, dsTypoPrimitive.lineheightIceage)
    },
    headingBoldLarge: {
      fontWeight: dsTypoPrimitive.fontweightBold,
      fontSize: dsTypoPrimitive.fontsizeMild,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeMild, dsTypoPrimitive.lineheightGlacial),
      letterSpacing: dsTypoPrimitive.characterspacingZero
    },
    headingBoldMedium: {
      fontWeight: dsTypoPrimitive.fontweightBold,
      fontSize: dsTypoPrimitive.fontsizeCool,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeCool, dsTypoPrimitive.lineheightGelid),
      letterSpacing: dsTypoPrimitive.characterspacingHimalayas
    },
    headingBoldSmall: {
      fontWeight: dsTypoPrimitive.fontweightBold,
      fontSize: dsTypoPrimitive.fontsizeCold,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeCold, dsTypoPrimitive.lineheightGelid),
      letterSpacing: dsTypoPrimitive.characterspacingHimalayas
    },
    headingBoldExtrasmall: {
      fontWeight: dsTypoPrimitive.fontweightBold,
      fontSize: dsTypoPrimitive.fontsizeBittercold,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeBittercold, dsTypoPrimitive.lineheightQuickfreeze),
      letterSpacing: dsTypoPrimitive.characterspacingHimalayas
    },
    subheadingSemiboldLarge: {
      fontWeight: dsTypoPrimitive.fontweightSemibold,
      fontSize: dsTypoPrimitive.fontsizeFrigid,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrigid, dsTypoPrimitive.lineheightQuickfreeze),
      letterSpacing: dsTypoPrimitive.characterspacingHindukush
    },
    subheadingSemiboldDefault: {
      fontWeight: dsTypoPrimitive.fontweightSemibold,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrostbite, dsTypoPrimitive.lineheightQuickfreeze),
      letterSpacing: dsTypoPrimitive.characterspacingHindukush
    },
    bodyRegularLarge: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeBittercold,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeBittercold, dsTypoPrimitive.lineheightGlacial),
      letterSpacing: dsTypoPrimitive.characterspacingHimalayas
    },
    bodyRegularMedium: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeFrigid,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrigid, dsTypoPrimitive.lineheightGelid),
      letterSpacing: dsTypoPrimitive.characterspacingHindukush
    },
    bodyRegularSmall: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrostbite, dsTypoPrimitive.lineheightGelid),
      letterSpacing: dsTypoPrimitive.characterspacingAlps
    },
    supportBoldTextbutton: {
      fontWeight: dsTypoPrimitive.fontweightBold,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrostbite, dsTypoPrimitive.lineheightZero),
      letterSpacing: dsTypoPrimitive.characterspacingArctic,
      textTransform: dsTypoPrimitive.casingUppercase
    },
    supportRegularInfo: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeBlizzard,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrostbite, dsTypoPrimitive.lineheightQuickfreeze),
      letterSpacing: dsTypoPrimitive.characterspacingAlps,
      textTransform: dsTypoPrimitive.casingNone
    },
    supportRegularFootnote: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeIceage,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeIceage, dsTypoPrimitive.lineheightDeepfreeze),
      letterSpacing: dsTypoPrimitive.characterspacingAlps
    },
    supportRegularMetadata: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(dsTypoPrimitive.fontsizeFrostbite, dsTypoPrimitive.lineheightZero),
      letterSpacing: dsTypoPrimitive.characterspacingAlps,
      textTransform: dsTypoPrimitive.casingUppercase
    }
  }

  const dsTypo = {
    ...dsTypoPrimitive,
    ...dsTypoComposite
  }

  const typography = {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: `"${dsTypo.primaryFont}", "Helvetica"`,
    fontWeightRegular: dsTypo.fontWeightRegular,
    fontWeightMedium: dsTypo.fontWeightMedium,
    fontWeightBold: dsTypo.fontWeightBold,
    headingBoldExtralarge: dsTypo.headingBoldExtralarge,
    headingBoldLarge: dsTypo.headingBoldLarge,
    headingBoldMedium: dsTypo.headingBoldMedium,
    headingBoldSmall: dsTypo.headingBoldSmall,
    headingBoldExtrasmall: dsTypo.headingBoldExtrasmall,
    subheadingSemiboldLarge: dsTypo.subheadingSemiboldLarge,
    subheadingSemiboldDefault: dsTypo.subheadingSemiboldDefault,
    bodyRegularLarge: dsTypo.bodyRegularLarge,
    bodyRegularMedium: dsTypo.bodyRegularMedium,
    bodyRegularSmall: dsTypo.bodyRegularSmall,
    supportBoldTextbutton: dsTypo.supportBoldTextbutton,
    supportRegularInfo: dsTypo.supportRegularInfo,
    supportRegularFootnote: dsTypo.supportRegularFootnote,
    supportRegularMetadata: dsTypo.supportRegularMetadata
  }

  return { dsTypo, typography, calculateLinerHeight }
}

function calculateLinerHeight (fontSizePX, lineHeightTokenPX) {
  const fontSize = parseInt(fontSizePX.replace('px', ''), 10)
  const lineHeightToken = parseInt(lineHeightTokenPX.replace('px', ''), 10)
  const lineHeight = fontSize + lineHeightToken
  const lineHeightPX = `${lineHeight}px`
  return lineHeightPX
}
