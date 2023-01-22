import * as webHttps from 'src/Configurations/WebHttp'

const performHandshake = async () => {
  const promises = Object.values(webHttps).map(handdshake)
  const responses = await Promise.allSettled(promises)
  responses.forEach(response => {
    if (response.status === 'rejected') {
      throw response.reason
    }
  })
}

const handdshake = async (webHttp) => {
  if (!webHttp) { return }

  const options = {
    url: '/handshake',
    method: 'GET'
  }

  try {
    const storedPublicKey = webHttp.context.get('PUBLIC_KEY')
    if (storedPublicKey) { return }

    const response = await webHttp.request(options)
    const { data: body } = response
    const { data } = body
    const { publicKey } = data
    webHttp.context.set('PUBLIC_KEY', publicKey)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default performHandshake
