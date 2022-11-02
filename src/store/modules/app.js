
export default {
  namespaced: true,
  state: () => ({
    sideBarOpened: true,
    historyRoutes: [{
      path: '/',
      title: '首页'
    }]
  }),
  mutations: {
    toggleSideBar (state) {
      state.sideBarOpened = !state.sideBarOpened
    },
    addHistoryRoutes: (state, payload) => {
      const routes = state.historyRoutes.map(item => item.path)
      if (!routes.includes(payload.path)) {
        state.historyRoutes.push(payload)
      }
    }
  },
  actions: {

  }
}
