<template>
  <div>
    <h1>{{ user.name }}</h1>
    <hr>
    <p>phone: {{ user.phone }}</p>
    <p>email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  // валидация при заходе на страницу
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  // вариант 1: загрузка данных юзера для серверного рендера
  async asyncData ({ $axios, params }) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return { user }
  }
}
</script>
