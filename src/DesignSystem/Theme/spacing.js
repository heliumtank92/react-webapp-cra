const SPACE_COEFICIENT = 4

const dsSpacingCssVars = {
  zero: 0,
  deepfreeze: 2,
  quickfreeze: 4,
  glacial: 8,
  frostbite: 12,
  bittercold: 16,
  cool: 20,
  mild: 24,
  pleasant: 28,
  warm: 32,
  tepid: 36,
  tropical: 40,
  hot: 44,
  blazing: 48,
  molten: 64,
  superheated: 80,
  meltdown: 96,
  whitehot: 112,
  plasma: 128
}

const dsSpacing = {
  zero: dsSpacingCssVars.zero / SPACE_COEFICIENT,
  deepfreeze: dsSpacingCssVars.deepfreeze / SPACE_COEFICIENT,
  quickfreeze: dsSpacingCssVars.quickfreeze / SPACE_COEFICIENT,
  glacial: dsSpacingCssVars.glacial / SPACE_COEFICIENT,
  frostbite: dsSpacingCssVars.frostbite / SPACE_COEFICIENT,
  bittercold: dsSpacingCssVars.bittercold / SPACE_COEFICIENT,
  cool: dsSpacingCssVars.cool / SPACE_COEFICIENT,
  mild: dsSpacingCssVars.mild / SPACE_COEFICIENT,
  pleasant: dsSpacingCssVars.pleasant / SPACE_COEFICIENT,
  warm: dsSpacingCssVars.warm / SPACE_COEFICIENT,
  tepid: dsSpacingCssVars.tepid / SPACE_COEFICIENT,
  tropical: dsSpacingCssVars.tropical / SPACE_COEFICIENT,
  hot: dsSpacingCssVars.hot / SPACE_COEFICIENT,
  blazing: dsSpacingCssVars.blazing / SPACE_COEFICIENT,
  molten: dsSpacingCssVars.molten / SPACE_COEFICIENT,
  superheated: dsSpacingCssVars.superheated / SPACE_COEFICIENT,
  meltdown: dsSpacingCssVars.meltdown / SPACE_COEFICIENT,
  whitehot: dsSpacingCssVars.whitehot / SPACE_COEFICIENT,
  plasma: dsSpacingCssVars.plasma / SPACE_COEFICIENT
}

export { SPACE_COEFICIENT, dsSpacingCssVars, getSpacingPX }

export default dsSpacing

function getSpacingPX (multipler) {
  return `${SPACE_COEFICIENT * multipler}px`
}
