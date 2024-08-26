// popup VUEX
const state = {
  /** userInfo */
  alertPopup: {
    status: false,
    title: '',
    contents: '',
    button: '',
    buttonFunction: ''
  },

  confirmPopup: {
    status: false,
    title: '',
    contents: '',
    button: {
      oneName: '',
      twoName: '',
      oneFunction: '',
      twoFunction: ''
    }
  }
}

const mutations = {
  /** userInfo setting */
  setAlertPopup(state, payload) {
    state.alertPopup = {
      status: true,
      title: payload.title,
      contents: payload.contents,
      button: payload.button,
      buttonFunction: payload.buttonFunction
    }
  },
  setAlertPopupClear(state) {
    state.alertPopup = {
      status: false,
      title: '',
      contents: '',
      button: '',
      buttonFunction: ''
    }
  },
  setConfirmPopup(state, payload) {
    state.confirmPopup = {
      status: true,
      title: payload.title,
      contents: payload.contents || '',
      button: {
        oneName: payload.button.oneName,
        twoName: payload.button.twoName,
        oneFunction: payload.button.oneFunction,
        twoFunction: payload.button.twoFunction
      }
    }
  },
  setConfirmPopupClear(state) {
    state.confirmPopup = {
      status: false,
      title: '',
      contents: '',
      button: {
        oneName: '',
        twoName: '',
        oneFunction: '',
        twoFunction: ''
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
