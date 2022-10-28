import { createStore } from 'vuex'
import user from '@/store/modules/user'
import app from '@/store/modules/app'
export default createStore({
  getters: {
    sideBarOpened: state => state.app.sideBarOpened
  },
  modules: {
    user,
    app
  }
})
