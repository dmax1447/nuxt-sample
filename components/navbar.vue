<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/about">
            About
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/users">
            Users
          </nuxt-link>
        </li>
        <li v-if="!hasToken" class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/login">
            Login
          </nuxt-link>
        </li>
      </ul>

      <form v-if="hasToken" @submit.prevent="logout" class="form-inline my-2 my-lg-0" >
        <p class="mr-sm-2">Hello, {{ username }}</p>
        <button class="btn btn-outline-success my-2 my-sm-0">Logout</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken () {
      return this.$store.getters.hasToken
    },

    username () {
      return this.$store.getters.username
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>
