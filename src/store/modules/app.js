
export default {
  namespaced: true,
  state: () => ({
    sideBarOpened: true
  }),
  mutations: {
    toggleSideBar (state) {
      state.sideBarOpened = !state.sideBarOpened
    }
  },
  actions: {

  }
}
