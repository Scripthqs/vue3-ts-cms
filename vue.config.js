// const path = require('path')
module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  },
  css: {
    extract: false
  }
}
