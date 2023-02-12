export default function getTypography (fontFamilyName = '') {
  const dsTypoPrimitive = {
    primaryFont: fontFamilyName,

    fontSizeScorched: '76px',
    fontSizeTorrid: '56px',
    fontSizeBlazzing: '48px',
    fontSizeHot: '44px',
    fontSizeTropical: '40px',
    fontSizeWarm: '32px',
    fontSizeMild: '24px',
    fontSizeCool: '20px',
    fontSizeCold: '18px',
    fontSizeBitterCold: '16px',
    fontSizeFrigid: '14px',
    fontSizeFrostbite: '12px',
    fontSizeBlizzard: '11px',
    fontSizeIceAge: '10px',

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
      fontSize: dsTypoPrimitive.fontSizeWarm,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeWarm} + ${dsTypoPrimitive.lineHeightIceAge})`
    },
    headingBoldLarge: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeMild,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeMild} + ${dsTypoPrimitive.lineHeightGlacial})`,
      letterSpacing: dsTypoPrimitive.characterSpacingZero
    },
    headingBoldMedium: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCool,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeCool} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldSmall: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeCold} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    headingBoldExtraSmall: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    subheadingSemiboldLarge: {
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    subheadingSemiboldDefault: {
      fontWeight: dsTypoPrimitive.fontWeightSemibold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyRegularLarge: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightGlacial})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHimalayas
    },
    bodyRegularMedium: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    bodyRegularSmall: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    bodyBoldSmall: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    bodyBoldMedium: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrigid,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrigid} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    bodyBoldLarge: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeBitterCold,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeBitterCold} + ${dsTypoPrimitive.lineHeightGelid})`,
      letterSpacing: dsTypoPrimitive.characterSpacingHindukush
    },
    supportBoldTextButton: {
      fontWeight: dsTypoPrimitive.fontWeightBold,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightZero})`,
      letterSpacing: dsTypoPrimitive.characterSpacingArctic,
      textTransform: dsTypoPrimitive.casingUppercase
    },
    supportRegularInfo: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeBlizzard,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightQuickFreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps,
      textTransform: dsTypoPrimitive.casingNone
    },
    supportRegularFootnote: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeIceAge,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeIceAge} + ${dsTypoPrimitive.lineHeightDeepfreeze})`,
      letterSpacing: dsTypoPrimitive.characterSpacingAlps
    },
    supportRegularMetadata: {
      fontWeight: dsTypoPrimitive.fontWeightRegular,
      fontSize: dsTypoPrimitive.fontSizeFrostbite,
      lineHeight: `calc(${dsTypoPrimitive.fontSizeFrostbite} + ${dsTypoPrimitive.lineHeightZero})`,
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
    bodyBoldLarge: dsTypo.bodyBoldLarge,
    headingBoldExtraSmall: dsTypo.headingBoldExtraSmall,
    subheadingSemiboldLarge: dsTypo.subheadingSemiboldLarge,
    subheadingSemiboldDefault: dsTypo.subheadingSemiboldDefault,
    bodyRegularLarge: dsTypo.bodyRegularLarge,
    bodyRegularMedium: dsTypo.bodyRegularMedium,
    bodyRegularSmall: dsTypo.bodyRegularSmall,
    bodyBoldSmall: dsTypo.bodyBoldSmall,
    supportBoldTextButton: dsTypo.supportBoldTextButton,
    supportRegularInfo: dsTypo.supportRegularInfo,
    supportRegularFootnote: dsTypo.supportRegularFootnote,
    supportRegularMetadata: dsTypo.supportRegularMetadata
  }

  return { dsTypo, typography }
}
