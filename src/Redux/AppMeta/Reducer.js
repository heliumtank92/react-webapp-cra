import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAME } from './Selectors'
import {
  setAppMetaAction,
  setAppMetaModeAction,
  setAppMetaMinimumLoaderTimeCompletedAction
} from './Actions'

const DEFAULT_PALETTE = {
  dark: {
    primary: '#97144D',

    secondary1: '#ED1164',
    secondary2: '#F14687',
    secondary3: '#F57BA9',
    secondary4: '#F9B0CC',
    secondary5: '#F9B0CC',

    black: '#000000',
    blackLight: '#282828',
    white: '#FFFFFF',

    grey1: '#404040',
    grey2: '#575757',
    grey3: '#6E6E6E',
    grey4: '#858585',
    grey5: '#9D9D9D',
    grey6: '#B4B4B4',
    grey7: '#CBCBCB',
    grey8: '#E2E2E2',
    grey9: '#F1F1F1',
    grey10: '#F9F9F9',

    tertiary1: '#F3FBFB',
    tertiary2: '#E6F8F4',
    tertiary3: '#B8DDDB',
    tertiary4: '#3D7F7C',
    tertiary5: '#154B3F',
    tertiaryLight: '#081919',
    tertiaryExtraLight: '#154B3F',

    negative: '#EB0000',
    negativeLight: '#320F19',

    positive: '#278829',
    positiveLight: '#0C1907',

    pending: '#FEC600',
    pendingLight: '#322A0F',

    warning: '#D84008',
    warningLight: '#321E0F',

    variable: '#145599',
    variableLight: '#0F1B32',
    variableExtraLight: '#0C1015',

    typical: '#165964',
    typicalLight: '#E3F5F8'
  },

  light: {
    primary: '#97144D',

    secondary1: '#ED1164',
    secondary2: '#F14687',
    secondary3: '#F57BA9',
    secondary4: '#F9B0CC',
    secondary5: '#F9B0CC',

    black: '#000000',
    blackLight: '#282828',
    white: '#FFFFFF',

    grey1: '#404040',
    grey2: '#575757',
    grey3: '#6E6E6E',
    grey4: '#858585',
    grey5: '#9D9D9D',
    grey6: '#B4B4B4',
    grey7: '#CBCBCB',
    grey8: '#E2E2E2',
    grey9: '#F1F1F1',
    grey10: '#F9F9F9',

    tertiary1: '#12877F',
    tertiary2: '#49A49E',
    tertiary3: '#81C1BD',
    tertiary4: '#B8DDDB',
    tertiary5: '#E6F8F4',
    tertiaryLight: '#F3FBFB',
    tertiaryExtraLight: '#EBF9F8',

    negative: '#EB0000',
    negativeLight: '#F9EBEF',

    positive: '#278829',
    positiveLight: '#EFF9EB',

    pending: '#FEC600',
    pendingLight: '#F9F6EB',

    warning: '#D84008',
    warningLight: '#F9F1EB',

    variable: '#145599',
    variableLight: '#EBF0F9',
    variableExtraLight: '#F1F4F7',

    typical: '#165964',
    typicalLight: '#E3F5F8'
  }
}

const INITIAL_STATE = {
  palette: DEFAULT_PALETTE,
  mode: 'light',
  fontUrl: '',
  fontFamilyName: 'Lato',
  minimumLoaderTime: 1000,
  minimumLoaderTimeCompleted: false
}

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  extraReducers: {
    [setAppMetaAction]: (state, { payload }) => {
      const {
        palette = INITIAL_STATE.palette,
        mode = INITIAL_STATE.mode,
        fontFamilyName = INITIAL_STATE.fontFamilyName
      } = payload

      state.palette = palette
      state.mode = mode
      state.fontFamilyName = fontFamilyName
    },
    [setAppMetaModeAction]: (state, { payload }) => {
      state.mode = payload
    },
    [setAppMetaMinimumLoaderTimeCompletedAction]: (state, { payload }) => {
      state.minimumLoaderTimeCompleted = true
    }
  }
})

export default slice.reducer
