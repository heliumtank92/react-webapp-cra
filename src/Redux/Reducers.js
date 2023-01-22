import { combineReducers } from 'redux'

import AuthReducer from 'src/Redux/Auth/Reducer'
import { SLICE_NAME as AuthSliceName } from 'src/Redux/Auth/Selectors'

import AppMetaReducer from 'src/Redux/AppMeta/Reducer'
import { SLICE_NAME as AppMetaSliceName } from 'src/Redux/AppMeta/Selectors'

import ServiceTrackerReducer from 'src/Redux/ServiceTracker/Reducer'
import { SLICE_NAME as ServiceTrackerSliceName } from 'src/Redux/ServiceTracker/Selectors'

const reducers = {
  [AuthSliceName]: AuthReducer,
  [AppMetaSliceName]: AppMetaReducer,
  [ServiceTrackerSliceName]: ServiceTrackerReducer
}

const whitelist = [AppMetaSliceName]

export default combineReducers(reducers)

export { whitelist }
