import '@/assets/styles/base.less'
import axios from 'axios'
import Vue from 'vue'
import { ConfigProvider, Icon, Button, Form, Input, Checkbox, message } from 'ant-design-vue'
import Background from '@/components/Background.vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_AXIOS_DEFAULTS_BASEURL

Vue.prototype.$http = axios

Vue.use(ConfigProvider)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Checkbox)

Vue.prototype.$message = message

Vue.component('Background', Background)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
