import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/login'
import HomeView from '@/views/index'
import store from '@/store'
const whiteList = []
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (whiteList.includes(to.path)) {
    next()
  } else {
    const isLogin = await checkIsLogin()
    if (to.path === '/login') {
      if (isLogin) {
        await router.push('/')
      } else {
        next()
      }
    } else {
      if (isLogin) {
        next()
      } else {
        await router.push('/login')
      }
    }
  }
})
async function checkIsLogin () {
  let ans = false
  try {
    await store.dispatch('user/isLogin')
    ans = true
  } catch (e) {

  }
  return ans
}
export default router
