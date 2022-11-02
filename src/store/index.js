import { createStore } from 'vuex'
import user from '@/store/modules/user'
import app from '@/store/modules/app'
export default createStore({
  getters: {
    sideBarOpened: state => state.app.sideBarOpened,
    userInfo: state => state.user.userInfo,
    historyRoutes: state => state.app.historyRoutes
  },
  modules: {
    user,
    app
  }
})
