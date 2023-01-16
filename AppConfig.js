const path = require('path')

const AppConfig = {
  appInfo: {
    appName: process.env.REACT_APP_APP_TITLE,
    shortName: 'React Webapp CRA',
    appDescription: process.env.REACT_APP_APP_DESCRIPTION
  },
  theme: {
    background: '#000000',
    themeColor: '#000000'
  },
  favIcons: {
    logo: './public/logo192.png' // svg works too!
  },
  manifestInfo: {
    orientation: 'any', // "any", "natural", "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary"
    background: '#ffffff',
    display: 'standalone', // "fullscreen", "standalone", "minimal-ui", "browser"
    startUrl: '.',
    icons: [
      {
        src: path.resolve(__dirname, 'public/logo192.png'),
        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      },
      {
        src: path.resolve(__dirname, 'public/logo512.png'),
        size: '512x512' // you can also use the specifications pattern
      },
      {
        src: path.resolve(__dirname, 'public/logo512.png'),
        size: '512x512',
        purpose: 'maskable'
      }
    ]
  }
}

module.exports = AppConfig
