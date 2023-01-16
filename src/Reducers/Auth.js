import { createSlice } from '@reduxjs/toolkit'

export const SLICE_NAME = 'auth'

export const getReducer = state => {
  return state[SLICE_NAME]
}

const INITIAL_STATE = {
  authToken: '',
  apiKey: '',
  isLoggedIn: false
}

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setTokenAction: (state, { payload }) => {
      state.authToken = payload || state.authToken
    },
    setApiKeyAction: (state, { payload }) => {
      state.apiKey = payload || state.apiKey
    }
  }
})

export const { setTokenAction, setApiKeyAction } = slice.actions
export default slice.reducer
