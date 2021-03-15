<template>
  <v-app>
    <div>
      <h1>
        Vuetify sandbox
      </h1>
      <hr>
      <p>Buttons</p>
      <v-btn>Normal</v-btn>
      <v-btn color="primary">Primary</v-btn>
      <v-btn depressed color="error">Error</v-btn>
      <v-btn depressed disabled>Disabled</v-btn>
      <hr>
      <p>Sliders</p>
      <div class="d-flex p-1">

      </div>

      <hr>
      <p>Form with validation</p>
      <div class="w-50 p-1">

      </div>

      <hr>
      <p>Tabs</p>
      <div class="w-50">

      </div>

      <hr>
      <p>Carousel</p>
      <div class="w-50 mb-4">

      </div>
    </div>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    val: null
  }),
  methods: {
  }
};
</script>

<style lang="scss">
.carousel {
  position: relative;

  &__image {
    height: 400px;
  }

  &__title {
    position: absolute;
    left: 30px;
    bottom: 60px;
    // background: black;
    color: white;
  }

  &__text {
    position: absolute;
    left: 30px;
    bottom: 30px;
    // background: black;
    color: white;
  }
}

.infinite-list-wrapper {
  height: 300px;
  text-align: center;

  .list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
    margin-bottom: 1rem;
  }
}
</style>
