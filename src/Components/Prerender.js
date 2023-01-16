import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { TextEncoder, TextDecoder } from 'util'

import {
  SERVICE_DOMAIN
} from 'src/Configurations/env'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

function preRenderHeaders () {
  const jsx = []

  if (SERVICE_DOMAIN) {
    jsx.push(<link rel='preconnect' href={SERVICE_DOMAIN} />)
  }

  return ReactDOMServer.renderToString(<link rel='preconnect' href={SERVICE_DOMAIN} />)
}

export {
  preRenderHeaders
}
