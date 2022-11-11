import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/login'
import Layout from '@/layout/index'
import Home from '@/views/index'
import Profile from '@/views/profile/Profile'
import UserManage from '@/views/user/UserManage'
import Rank from '@/views/article/rank'
import store from '@/store'
const whiteList = []
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/profile',
        component: Profile,
        meta: {
          title: '个人中心'
        }
      },
      {
        path: '/user',
        meta: {
          title: '用户'
        },
        children: [
          {
            path: '/user/manage',
            component: UserManage,
            meta: {
              title: '用户管理'
            }
          }
        ]
      },
      {
        path: '/article',
        meta: {
          title: '文章'
        },
        children: [
          {
            path: '/article/rank',
            component: Rank,
            meta: {
              title: '文章排名'
            }
          }
        ]
      }
    ]
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
        next(false)
        await router.push('/')
      } else {
        next()
      }
    } else {
      if (isLogin) {
        next()
      } else {
        next(false)
        await router.push('/login')
      }
    }
  }
})

router.afterEach((to, from) => {
  store.commit('app/addHistoryRoutes', {
    path: to.path,
    title: to.meta.title
  })
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
