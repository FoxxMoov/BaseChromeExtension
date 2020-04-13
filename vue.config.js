module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/scripts/background/index.js'
        },
        contentScripts: {
          entries: {
            'content-script': ['src/scripts/content/index.js']
          }
        }
      }
    }
  }
}
