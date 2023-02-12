const {
  NODE_ENV = '',
  BABEL_ENV = '',
  REACT_APP_APP_NAME = '',
  REACT_APP_APP_VERSION = '',
  REACT_APP_APP_TITLE = '',
  REACT_APP_APP_DESCRIPTION = '',
  REACT_APP_SELF_DOMAIN = '',
  REACT_APP_SERVICE_DOMAIN = '',
  REACT_APP_ASSEST_DOMAIN = '',
  REACT_APP_PREECONNECT_DOMAINS = '',
  REACT_APP_FONT_URL = '',
  REACT_APP_FONT_FAMILY_NAME = '',
  REACT_APP_AS_ENABLE_CRPTOGRAPHY = 'false',
  REACT_APP_AS_API_KEY = '',
  REACT_APP_AS_API_TIMEOUT = '3000',
  REACT_APP_AS_API_DOMAIN = ''
} = process.env

const APP_NAME = REACT_APP_APP_NAME
const APP_VERSION = REACT_APP_APP_VERSION
const APP_TITLE = REACT_APP_APP_TITLE
const APP_DESCRIPTION = REACT_APP_APP_DESCRIPTION
const SELF_DOMAIN = REACT_APP_SELF_DOMAIN
const SERVICE_DOMAIN = REACT_APP_SERVICE_DOMAIN
const ASSEST_DOMAIN = REACT_APP_ASSEST_DOMAIN
const PREECONNECT_DOMAINS = REACT_APP_PREECONNECT_DOMAINS.split(',')
const FONT_URL = REACT_APP_FONT_URL
const FONT_FAMILY_NAME = REACT_APP_FONT_FAMILY_NAME
const AS_ENABLE_CRPTOGRAPHY = REACT_APP_AS_ENABLE_CRPTOGRAPHY.toLowerCase() === 'true'
const AS_API_KEY = REACT_APP_AS_API_KEY
const AS_API_TIMEOUT = parseInt(REACT_APP_AS_API_TIMEOUT, 10) || 30000
const AS_API_DOMAIN = REACT_APP_AS_API_DOMAIN

export {
  NODE_ENV,
  BABEL_ENV,
  APP_NAME,
  APP_VERSION,
  APP_TITLE,
  APP_DESCRIPTION,
  SELF_DOMAIN,
  SERVICE_DOMAIN,
  ASSEST_DOMAIN,
  PREECONNECT_DOMAINS,
  FONT_URL,
  FONT_FAMILY_NAME,
  AS_ENABLE_CRPTOGRAPHY,
  AS_API_KEY,
  AS_API_TIMEOUT,
  AS_API_DOMAIN
}
