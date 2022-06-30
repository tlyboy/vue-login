import Vue from 'vue'
import '@/assets/styles/base.less'
import { Form, Input, Icon, Checkbox, Button, message } from 'ant-design-vue'
import Background from '@/components/Background.vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_AXIOS_DEFAULTS_BASEURL
Vue.prototype.$http = axios

Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(Button)

Vue.component('Background', Background)

Vue.prototype.$message = message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
