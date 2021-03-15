<template>
  <div>
    <h1><a href="https://github.surmon.me/vue-awesome-swiper/">Vue-awesome-slide</a></h1>
    <div class="block">
      <h3>v1: Swiper on directive, SSR</h3>
      <div v-swiper="swiperOption1" class="swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, i) in pics" :key="i" class="swiper-slide">
            <img :src="item" alt="">
          </div>
        </div>
        <div class="swiper-button-prev" />
        <div class="swiper-button-next" />
        <div class="swiper-pagination" />
      </div>
    </div>
    <div class="block">
      <h3>v2: Swiper on components</h3>
      <swiper ref="slider2r" :options="swiperOption2" class="swiper">
        <swiper-slide v-for="(item, i) in pics" :key="i">
          <img :src="item" alt="">
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
      <div class="swiper-switch">
        <label class="swiper-switch__label">Active slide: </label>
        <el-input v-model="activeSlide" name="activeSlide" class="swiper-switch__input" />
        <el-button @click="setSlide" type="primary" class="swiper-switch__btn">
          Set
        </el-button>
      </div>
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
    activeSlide: null,
    value: '',
    slider1: null,
    slider2: null,
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
    swiperOption1: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    swiperOption2: {
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

  },
  mounted() {
    this.$swiper2 = this.$refs.slider2r.$swiper;
  },
  methods: {
    setSlide() {
      this.$swiper2.slideTo(this.activeSlide - 1, 1500);
    }
  }
};
</script>
<style lang="scss">
  .swiper-wrapper {
    width: 100%;
  }

  .swiper {
    margin-bottom: 1rem;
  }

  .swiper-slide {
    width: 100%;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      overflow: hidden;
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

  .swiper-switch {
    display: flex;
    align-items: center;
    &__label {
      margin-right: 1rem;
      margin-bottom: 0;
    }

    &__input {
      width: 120px;
      margin-right: 1rem;
    }
  }

</style>
