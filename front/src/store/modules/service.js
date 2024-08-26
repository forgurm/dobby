// popup VUEX
const state = {
  /** userInfo */
  loadingBar: {
    status: false
  },
  lnb: {
    status: true
  },
  login: {
    yn: false,
    userTokne: '',
    refreshToken: ''
  }
}

const mutations = {
  /** userInfo setting */
  setLogin(state) {
    state.loginYn = {
      yn: true,
      userToken: state.userToken,
      refreshToken: state.refreshToken
    }
  },
  setLogout(state) {
    state.loginYn = {
      yn: false,
      userToken: '',
      refreshToken: ''
    }
  },
  setLoadingBar(state) {
    state.loadingBar = {
      status: true
    }
  },
  setLoadingBarClose(state) {
    state.loadingBar = {
      status: false
    }
  },
  setOpenLnb(state) {
    state.lnb = {
      status: true
    }
  },
  setCloseLnb(state) {
    state.lnb = {
      status: false
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
