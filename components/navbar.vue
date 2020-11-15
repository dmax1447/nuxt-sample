<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>

    <div id="navbarSupportedContent" class="collapse navbar-collapse d-flex align-items-center">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/gallery">
            Lazy load gallery
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/swiper">
            Swiper
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
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/elements">
            Elements-ui
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/sandbox">
            Sandbox
          </nuxt-link>
        </li>

      </ul>

      <form v-if="hasToken" @submit.prevent="logout" class="form-inline my-2 my-lg-0">
        <p class="p-2 m-0">
          Hello, {{ currentUser }}
        </p>
        <button class="btn btn-outline-success my-2 my-sm-0">
          Logout
        </button>
      </form>
      <p v-else class="nav-item mb-0">
        <nuxt-link active-class="active" class="nav-link" to="/login">
          Login
        </nuxt-link>
      </p>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters([
      'hasToken',
      'currentUser'
      // ...
    ])
  },

  methods: {
    logout() {
      this.$store.dispatch('userLogout');
    }
  }
};
</script>
