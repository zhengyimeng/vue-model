const path = require('path')

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      stylus: {
        import: [path.join(__dirname, 'src/variables.styl')]
      }
    }
  }
}
