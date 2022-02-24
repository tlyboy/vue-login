module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-login/' : '/',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.tlyboy.vue-login',
        win: {
          target: ['nsis', '7z']
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
