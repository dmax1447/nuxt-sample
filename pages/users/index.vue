<template>
  <div>
    <h1 class="title">
      Users list page
    </h1>
    <ul>
      <li v-for="user in userList" :key="user.id">
        <a @click.prevent="openUser(user.id)" href="#">{{ user.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data: () => ({
  }),

  computed: {
    // users () {
    //   return this.$store.getters['users/users']
    // }
    ...mapGetters('users', [
      'userList'
    ])
  },

  // вариант без стора: асинхронно запросим на сервере данные чтобы использовать их при рендеринге разметки
  // async asyncData ({ $axios }) {
  //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
  //   return { users }
  // },

  // вариант с использованием store: перед рендером страницы, для заполнения стора. если метод fetch возвращает промис то nuxt дождется его разрешения
  fetch({ store }) {
    if (store.getters['users/userList'].length === 0) {
      return store.dispatch('users/loadUsers');
    }
  },

  methods: {
    // открыть страницу пользователя с переданным id
    openUser(user) {
      this.$router.push(`/users/${user}`);
    }
  }
};
</script>
