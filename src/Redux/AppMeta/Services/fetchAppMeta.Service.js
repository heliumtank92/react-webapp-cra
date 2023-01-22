import { FONT_FAMILY_NAME } from 'src/Configurations/env'
import serviceActionCreator from 'src/Redux/serviceActionCreator'
import { fetchAppMetaActions, fetchAppMetaServiceName } from '../Actions'

async function fetchAppMetaService (data = {}) {
  const appConfig = { fontFamilyName: FONT_FAMILY_NAME }
  return appConfig
}

const fetchAppMetaServiceAction = serviceActionCreator(fetchAppMetaActions, fetchAppMetaService)

export default fetchAppMetaServiceAction
export { fetchAppMetaServiceName }
