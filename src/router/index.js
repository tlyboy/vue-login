import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import('@/views/Forgot.vue')
  }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
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
