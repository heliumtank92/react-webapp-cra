import { createSelector } from '@reduxjs/toolkit'

export const SLICE_NAME = 'appMeta'

export const getAppMetaReducer = state => {
  return state[SLICE_NAME]
}

export const getAppMetaModeSelector = createSelector(
  (state) => state[SLICE_NAME].appMeta,
  (appMeta) => appMeta
)
