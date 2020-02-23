export const state = () => ({
  currentUser: null,
  token: null
});

export const mutations = {
  setcurrentUser(state, payload) {
    state.currentUser = payload;
  },

  setToken(state, payload) {
    state.token = payload;
  },

  clearcurrentUser(state) {
    state.currentUser = null;
  },

  clearToken(state) {
    state.token = null;
  }
};

export const getters = {
  currentUser: state => state.currentUser,
  hasToken: state => !!state.token
};

export const actions = {
  nuxtServerInit({ dispatch }) {
    // запускается один раз при старте на сервере
    // console.log('nuxtServerInit')
  },

  userLogin({ commit }, currentUser) {
    commit('setToken', 'mySuperToken');
    commit('setcurrentUser', currentUser);
  },

  userLogout({ commit }) {
    commit('clearToken', 'mySuperToken');
    commit('clearcurrentUser');
  }
};
