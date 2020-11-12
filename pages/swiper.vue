<template>
  <div>
    <h1>Swiper</h1>
    <div class="swiper" v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in pics">
            <img :src="item" alt="">
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="bottom-nav swiper-pagination"></div>
    </div>
<!--    <div class="block">-->
<!--      <h3>Gallery</h3>-->
<!--      <ul class="list">-->
<!--        <li v-for="(item, i) in pics" :key="i" class="list__item">-->
<!--          <img :src="item" class="list__item-img">-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';

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
      autoplay: 3500
      // setWrapperSize: false,
      // autoHeight: true,
      // pagination: '.swiper-pagination',
      // paginationClickable: true,
      // prevButton: '.swiper-button-prev',
      // nextButton: '.swiper-button-next',
      // mousewheelControl: false,
      // autoplayDisableOnInteraction: false,
      // observeParents: true,
      // grabCursor: true,
      // preloadImages: false,
      // lazyLoading: true
    }
  }),
  computed: {

  }
};
</script>
<style lang="scss">
  .swiper-wrapper {
    width: 700px;
  }

  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
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
