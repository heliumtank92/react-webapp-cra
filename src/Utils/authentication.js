import AppStore from 'src/Configurations/AppStore'
import { SLICE_NAME as AUTH_SLICE_NAME } from 'src/Reducers/Auth'

export const checkIfLoggedIn = () => {
  const store = AppStore.getState()
  const authReducer = store[AUTH_SLICE_NAME]
  const isLoggedIn = authReducer.isLoggedIn

  return isLoggedIn
}
