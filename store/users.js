export const state = () => ({
  userList: []
});

export const mutations = {
  setUsers(state, payload) {
    state.userList = payload;
  }
};

export const actions = {
  loadUsers({ commit }) {
    this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((users) => {
        commit('setUsers', users);
      });
  }
};

export const getters = {
  userList: state => state.userList
};
