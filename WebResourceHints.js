'use strict'
// If your plugin is direct dependent to the html webpack plugin:
const HtmlWebpackPlugin = require('html-webpack-plugin')

class WebResourceHints {
  constructor (options = {}) {
    this.options = options

    this.handlePreconnects = this.handlePreconnects.bind(this)
  }

  apply (compiler) {
    compiler.hooks.compilation.tap('WebResourceHints', (compilation) => {
      // Static Plugin interface |compilation |HOOK NAME | register listener
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
        'WebResourceHints', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          // Manipulate the content
          this.handlePreconnects(data)
          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }

  handlePreconnects (htmlWebpackPlugin) {
    const { preconnects = [] } = this.options
    preconnects.forEach(origin => {
      const tag = {
        tagName: 'link',
        selfClosingTag: false,
        attributes: {
          rel: 'preconnect',
          href: origin,
          crossorigin: ''
        }
      }
      htmlWebpackPlugin.assetTags.meta.unshift(tag)
    })
  }
}

module.exports = WebResourceHints
