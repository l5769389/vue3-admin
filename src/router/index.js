import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/login'
const routes = [
  {
    path: '/login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
