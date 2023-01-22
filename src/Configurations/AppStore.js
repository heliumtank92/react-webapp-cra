import { configureStore } from '@reduxjs/toolkit'
import reducers, { whitelist } from 'src/Redux/Reducers'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import localforage from 'localforage'

const persistConfig = {
  key: 'process.env.REACT_APP_APP_TITLE',
  version: 1,
  storage: localforage,
  whitelist
}

const persistedReducer = persistReducer(persistConfig, reducers)

const AppStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

const PersistedAppStore = persistStore(AppStore)

export default AppStore

export { PersistedAppStore }
