import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ForgotView from '@/views/ForgotView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    const token = localStorage.getItem('token')
    if (token) {
      next() // 访问的是后台主页，且有 token 的值
    } else {
      next('/login') // 访问的是后台主页，但是没有 token 的值
    }
  } else {
    next() // 访问的不是后台主页，直接放行
  }
})

export default router
