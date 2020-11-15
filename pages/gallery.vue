<template>
  <div>
    <h1>Lazy load gallery</h1>
    <div class="block">
      <h3>Немного текста чтобы отбить картинки вниз</h3>
      <p>Картинки в первой галерее грузятся по наведению мышки</p>
      <p>Картинки во второй галерее грузятся по наведению мышки</p>

    </div>

    <div class="block">
      <h3>Manual lazy load on hover</h3>
      <ul class="list">
        <li v-for="(item, i) in pics" :key="i" class="list__item" @mouseenter="$lazyLoad">
          <img class="list__item-img" :data-src="item" data-manual-lazy>
          <p>загрузка изображения</p>
        </li>
      </ul>
    </div>

    <div class="block">
      <h3>Auto lazy load (loaded when visible)</h3>
      <ul class="list">
        <li v-for="(item, i) in pics" :key="i" class="list__item">
          <img class="list__item-img" :data-src="item" v-lazy-load>
          <p>загрузка изображения</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: '',
    pics: [
      require('@/assets/img/1.jpg'),
      require('@/assets/img/2.jpg'),
      require('@/assets/img/3.jpg'),
      require('@/assets/img/4.jpg'),
      require('@/assets/img/1.jpg'),
      require('@/assets/img/2.jpg'),
      require('@/assets/img/3.jpg'),
      require('@/assets/img/4.jpg'),
      require('@/assets/img/1.jpg'),
      require('@/assets/img/2.jpg'),
      require('@/assets/img/3.jpg'),
      require('@/assets/img/4.jpg')
    ]
  }),
  computed: {

  }
};
</script>
<style lang="scss">
  .block {
    margin-top: 20px;
    margin-bottom: 50px;
  }

  h1 {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 20px;
  }
  .list {
    position: relative;
    display: grid;
    grid-gap: 20px;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;

    &__item {
      position: relative;
      width: 100%;
      height: 200px;

      padding-left: 0;
      border-radius: 10px;
      overflow: hidden;

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
      }

      img {
        background-color: #ddeef0;
      }

      img.isLoading + p {
        display: none;
      }

      img.isLoaded + p {
        display: none;
      }

      &:nth-child(2n) img {
        background-color: #fdeacd;
      }

      &:nth-child(3n) img {
        background-color: #cbe4e7;
      }
    }

    &__item-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .isLoading {
      background-color: blue;
    }

  }
</style>
