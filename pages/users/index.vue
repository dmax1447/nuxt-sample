<template>
  <div>
    <h1 class="title">
      Users list page
    </h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a @click.prevent="openUser(user.id)" href="#">{{ user.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),

  computed: {
    users () {
      return this.$store.getters['users/users']
    }
  },

  // вариант без стора: асинхронно запросим на сервере данные чтобы использовать их при рендеринге разметки
  // async asyncData ({ $axios }) {
  //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
  //   return { users }
  // },

  async fetch ({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/loadUsers')
    }
  },

  methods: {
    // открыть страницу пользователя с переданным id
    openUser (user) {
      this.$router.push(`/users/${user}`)
    }
  }
}
</script>
