import WebHttp from '@am92/web-http'
import CONTEXT from '@am92/web-http/CONTEXT'
import {
  AS_ENABLE_CRPTOGRAPHY,
  AS_API_KEY,
  AS_API_TIMEOUT,
  AS_API_DOMAIN
} from './env'

export let asHttp

if (AS_API_DOMAIN) {
  const AXIOS_HTTP_CONFIG = {
    baseURL: AS_API_DOMAIN,
    timeout: AS_API_TIMEOUT
  }

  const WEB_HTTP_CONFIG = {
    disableCrypto: !AS_ENABLE_CRPTOGRAPHY
  }

  asHttp = new WebHttp(AXIOS_HTTP_CONFIG, WEB_HTTP_CONFIG)
  asHttp.context.set(CONTEXT.API_KEY, AS_API_KEY)
}
