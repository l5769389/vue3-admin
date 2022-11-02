import { isLogin, login } from '@/api/sys'

export default {
  namespaced: true,
  state: () => ({
    userInfo: null
  }),
  mutations: {
    setUserInfo: (state, payload) => {
      state.userInfo = payload
    }
  },
  actions: {
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: password
        })
          .then((data) => {
            resolve(data)
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    isLogin () {
      return new Promise((resolve, reject) => {
        isLogin()
          .then(res => {
            if (res.data.code === -1) {
              reject(new Error())
            } else {
              const { userInfo } = res.data.data
              this.commit('user/setUserInfo', userInfo)
              resolve()
            }
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  }
}
