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
    fontsizeBitterCold: '16px',
    fontsizeFrigid: '14px',
    fontsizeFrostbite: '12px',
    fontsizeBlizzard: '11px',
    fontsizeIceAge: '10px',

    fontWeightRegular: 400,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    fontWeightBoldItalic: 700,

    lineHeightIceAge: '10px',
    lineHeightGlacial: '8px',
    lineHeightGelid: '6px',
    lineHeightQuickFreeze: '4px',
    lineHeightDeepfreeze: '2px',
    lineHeightZero: '0px',

    characterSpacingArctic: 1,
    characterSpacingAlps: 0.32,
    characterSpacingHindukush: 0.24,
    characterSpacingHimalayas: 0.16,
    characterSpacingZero: 0,

    paragraphSpacing: '0px',
    casingUppercase: 'uppercase',
    casingNone: 'none'
  }

  const dsTypoComposite = {
    headingBoldExtraLarge: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeWarm,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeWarm,
        dsTypoPrimitive.lineHeightIceAge
      )
    },
    headingBoldLarge: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeMild,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeMild,
        dsTypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    headingBoldMedium: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeCool,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeCool,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldSmall: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeCold,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeCold,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldExtraSmall: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeBitterCold,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeBitterCold,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    subheadingSemiboldLarge: {
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontsizeFrigid,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrigid,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    subheadingSemiboldDefault: {
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrostbite,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyRegularLarge: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeBitterCold,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeBitterCold,
        dsTypoPrimitive.lineHeightGlacial
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    bodyRegularMedium: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeFrigid,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrigid,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyRegularSmall: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrostbite,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    bodyBoldMedium: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeFrigid,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrigid,
        dsTypoPrimitive.lineHeightGelid
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportBoldTextButton: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrostbite,
        dsTypoPrimitive.lineHeightZero
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingArctic,
      textTransform: dsTypoPrimitive.casingUppercase
    },
    supportRegularInfo: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeBlizzard,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrostbite,
        dsTypoPrimitive.lineHeightQuickFreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps,
      textTransform: dsTypoPrimitive.casingNone
    },
    supportRegularFootnote: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeIceAge,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeIceAge,
        dsTypoPrimitive.lineHeightDeepfreeze
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportRegularMetadata: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontsizeFrostbite,
      lineHeight: calculateLinerHeight(
        dsTypoPrimitive.fontsizeFrostbite,
        dsTypoPrimitive.lineHeightZero
      ),
      letterSpacing: dsTypoPrimitive.characterSpacingAlps,
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
    headingBoldExtraLarge: dsTypo.headingBoldExtraLarge,
    headingBoldLarge: dsTypo.headingBoldLarge,
    headingBoldMedium: dsTypo.headingBoldMedium,
    headingBoldSmall: dsTypo.headingBoldSmall,
    bodyBoldMedium: dsTypo.bodyBoldMedium,
    headingBoldExtraSmall: dsTypo.headingBoldExtraSmall,
    subheadingSemiboldLarge: dsTypo.subheadingSemiboldLarge,
    subheadingSemiboldDefault: dsTypo.subheadingSemiboldDefault,
    bodyRegularLarge: dsTypo.bodyRegularLarge,
    bodyRegularMedium: dsTypo.bodyRegularMedium,
    bodyRegularSmall: dsTypo.bodyRegularSmall,
    supportBoldTextButton: dsTypo.supportBoldTextButton,
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
