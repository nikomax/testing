<template>
  <swiper :options="swiperOption" :ref="id" :class="id" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="(image, index) in designSlides" :key="index">
      <div class="design-preview__slide">
        <div class="design-preview__slide-image">
          <picture v-if="photos">
            <source media="(min-width: 700px)" :srcset="image.src700">
            <source media="(min-width: 1400px)" :srcset="image.src1400">
            <source media="(min-width: 1920px)" :srcset="image.src1920">
            <source media="(min-width: 2200px)" :srcset="image.src2200">
            <img :src="image.src2200" alt="">
          </picture>
          <img :src="image" alt="" v-if="!photos">
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="design-slider-prev" slot="button-prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
        <rect width="4" height="9.61778" transform="translate(1.68384 10.1992) rotate(-45)"/>
        <rect width="11.9993" height="4" transform="translate(0 8.51416) rotate(-45)"/>
      </svg>
    </div>
    <div class="design-slider-next" slot="button-next">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
        <rect width="4" height="9.61778" transform="translate(10.3162 6.80081) rotate(135)"/>
        <rect width="11.9993" height="4" transform="translate(12 8.48584) rotate(135)"/>
      </svg>
    </div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    designSlides: Array,
    photos: Boolean,
    swiperOption: Object,
    id: String
  },
  methods: {
    callback (lol) {
      console.log(lol)
    }
  },
  computed: {
    swiper () {
      return this.$refs[`${this.id}`].swiper
    }
  }
}
</script>
