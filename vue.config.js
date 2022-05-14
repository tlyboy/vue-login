module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-login/' : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.tlyboy.vue-login',
        win: {
          target: ['nsis']
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
          runAfterFinish: false,
          shortcutName: 'Vue Login'
        },
        publish: ['github']
      }
    }
  }
}
