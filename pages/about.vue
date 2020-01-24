<template>
  <div>
    <h1>
      About this app
    </h1>
    <h2>Features:</h2>
    <ul>
      <li>SSR powered by Vue.JS and Nuxt</li>
      <li>online data provided by JSONPlaceholder.com with Axios</li>
      <li>Vuex for data storage and optional routing</li>
      <li>Bootstrap for UI</li>
      <li>Elements-UI lib</li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: ['auth']
}
</script>
