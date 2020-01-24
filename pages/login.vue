<template>
  <section>
    <h1>Login page</h1>

    <form @submit.prevent="onSubmit">
      <div v-if="$route.query.message" class="alert alert-danger mb-3">
        Please login first!
      </div>
      <div class="form-group">
        <input v-model="username" type="text" class="form-control">
      </div>
      <p>
        <nuxt-link to="/">
          Home page
        </nuxt-link>
      </p>
      <button class="btn btn-primary">
        Login
      </button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',

  data: () => ({
    username: ''
  }),

  methods: {
    onSubmit () {
      this.$store.dispatch('userLogin', this.username)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  section {
    width: 500px;
    margin: 0 auto;
  }
</style>
