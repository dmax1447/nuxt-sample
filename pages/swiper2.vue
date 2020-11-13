<template>
  <div>
    <h1>Swiper V2 (components)</h1>
    <div class="block">
      <h3>simple</h3>
<!--      <client-only>-->
        <swiper :swiper="swiperOption">
          <swiper-slide v-for="(item, i) in pics" :key="i">
            <img :src="item" alt="">
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
<!--      </client-only>-->
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
    ],
    swiperOption: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
  }),
  computed: {

  }
};
</script>
<style lang="scss">
  .swiper-wrapper {
    width: 100%;
    height: 600px;
    outline: 1px dashed green;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

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
