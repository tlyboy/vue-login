import Vue from 'vue'
import { Form, Input, Icon, Checkbox, Button, message } from 'ant-design-vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_AXIOS_DEFAULTS_BASEURL
Vue.prototype.$http = axios

Vue.use(Form).use(Input).use(Icon).use(Checkbox).use(Button)

Vue.prototype.$message = message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
