<template>
  <div>
    <h1><a href="https://github.surmon.me/vue-awesome-swiper/">Vue-awesome-slide</a></h1>
    <div class="block">
      <h3>v1: Swiper on directive, SSR</h3>
      <div class="swiper" v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in pics" :key="i">
            <img :src="item" alt="">
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="bottom-nav swiper-pagination"></div>
      </div>
    </div>
    <div class="block">
      <h3>v2: Swiper on components</h3>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="(item, i) in pics" :key="i">
          <img :src="item" alt="">
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
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
        el: '.swiper-pagination',
        dynamicBullets: true
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: true
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
  }

  .swiper-slide {
    width: 100%;
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

</style>
