export const state = () => ({
  username: null,
  token: null
})

export const mutations = {
  setUsername (state, payload) {
    state.username = payload
  },

  setToken (state, payload) {
    state.token = payload
  },

  clearUsername (state) {
    state.username = ''
  },

  clearToken (state) {
    state.token = ''
  }
}

export const getters = {
  username: state => state.username,
  hasToken: state => !!state.token
}

export const actions = {
  nuxtServerInit ({ dispatch }) {
    // запускается один раз при старте на сервере
    // console.log('nuxtServerInit')
  },

  userLogin ({ commit }, username) {
    commit('setToken', 'mySuperToken')
    commit('setUsername', username)
  },

  userLogout ({ commit }) {
    commit('clearToken', 'mySuperToken')
    commit('clearUsername')
  }
}
