export const APP_ROUTES = {
  AUTH: {
    BASE: '',
    HOME: 'home'
  },
  UNAUTH: {
    BASE: 'auth',
    LOGIN: 'login'
  },
  DS_EXAMPLES: {
    BASE: 'ds-examples',
    INDEX: ''
  },
  ANY: {
    BASE: '*'
  }
}

export const NAV_LINKS = generateNavLinks(APP_ROUTES)

function generateNavLinks (AppRoutes) {
  const navLink = {}
  const index = AppRoutes.BASE || ''
  for (const key in AppRoutes) {
    if (key !== 'BASE') {
      if (typeof AppRoutes[key] === 'object') {
        const subNavLinks = generateNavLinks(AppRoutes[key])
        if (Object.keys(subNavLinks).length) {
          navLink[key] = subNavLinks
        }
      }

      if (typeof AppRoutes[key] === 'string') {
        navLink[key] = `${index && `/${index}`}/${AppRoutes[key]}`
      }
    }
  }
  return navLink
}
