import DeviceDetector from 'device-detector-js'

export const getBrowserDetails = () => {
  const deviceDetector = new DeviceDetector()
  const navigatorAgent = navigator.userAgent || navigator.vendor || window.opera
  const device = deviceDetector.parse(navigatorAgent)
  return device
}

export const isMobileDevice = () => {
  const deviceInfo = getBrowserDetails()
  const { device = {} } = deviceInfo
  const { type } = device
  return type === 'smartphone'
}

export const isTabletDevice = () => {
  const deviceInfo = getBrowserDetails()
  const { device = {} } = deviceInfo
  const { type } = device
  return type === 'tablet' || type === 'phablet'
}

export const isDeskTopDevice = () => {
  const deviceInfo = getBrowserDetails()
  const { device = {} } = deviceInfo
  const { type } = device
  return type === 'desktop'
}
