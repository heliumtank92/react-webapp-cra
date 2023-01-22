import { createSlice } from '@reduxjs/toolkit'
import { createAppActions } from '../Application/Actions'
import { SLICE_NAME } from './Selectors'

const INITIAL_STATE = { isLoggedIn: false }

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  extraReducers: {
    [createAppActions.success]: (state) => {
      state.isLoggedIn = true
    }
  }
})

export default slice.reducer
