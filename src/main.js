import '@/assets/styles/main.less'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-cn'
import Vue from 'vue'
import { ConfigProvider, Icon, Button, Form, Input, Checkbox, message } from 'ant-design-vue'
import TBackground from '@/components/TBackground.vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

axios.defaults.baseURL = process.env.VUE_APP_AXIOS_DEFAULTS_BASEURL
moment.locale('zh-cn')

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$moment = moment
Vue.prototype.$message = message

Vue.use(ConfigProvider)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Checkbox)

Vue.component('TBackground', TBackground)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
