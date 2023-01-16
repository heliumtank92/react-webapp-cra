import { FONT_FAMILY_NAME } from 'src/Configurations/env'
import AppConfig from './AppConfigClass'

const getAppConfig = async () => {
  const response = {
    fontFamilyName: FONT_FAMILY_NAME
  }
  const appConfig = AppConfig.toClientObject(response)
  return appConfig
}

export default getAppConfig
