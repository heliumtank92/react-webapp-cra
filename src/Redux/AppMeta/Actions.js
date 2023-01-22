import { createAction } from '@reduxjs/toolkit'

export const fetchAppMetaServiceName = 'appMeta/fetchAppMeta'
export const fetchAppMetaActions = {
  loading: createAction(`${fetchAppMetaServiceName}/LOADING`),
  success: createAction(`${fetchAppMetaServiceName}/SUCCESS`),
  error: createAction(`${fetchAppMetaServiceName}/ERROR`)
}

export const setAppMetaAction = createAction('appMeta/setAppMeta')
export const setAppMetaModeAction = createAction('appMeta/setAppMetaMode')
export const setAppMetaMinimumLoaderTimeCompletedAction = createAction('appMeta/setAppMetaMinimumLoaderTimeCompleted')
