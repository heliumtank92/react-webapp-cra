import { combineReducers } from 'redux'
import authReducer, { SLICE_NAME as authSliceName } from 'src/Reducers/Auth'
import appMetaReducer, { SLICE_NAME as appMetaSliceName } from 'src/Reducers/AppMeta'

const reducers = {
  [authSliceName]: authReducer,
  [appMetaSliceName]: appMetaReducer
}

const whitelist = [
  authSliceName
]

export default combineReducers(reducers)

export { whitelist }
