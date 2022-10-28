import { isLogin, login } from '@/api/sys'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
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
            if (res.data.code === 500) {
              reject(new Error())
            } else {
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
