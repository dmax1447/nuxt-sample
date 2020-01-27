export const state = () => ({
  users: []
})

export const mutations = {
  setUsers (state, payload) {
    state.users = payload
  }
}

export const actions = {
  loadUsers ({ commit }) {
    this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((users) => {
        commit('setUsers', users)
      })
  }
}

export const getters = {
  users: state => state.users
}
