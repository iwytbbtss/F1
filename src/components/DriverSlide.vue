<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(driver, i) in this.$store.getters.getCSDrivers" :key="i">
      <div>
        <img :src="driver.driver.image" :alt="driver.driver.name">
        <h3>{{ driver.driver.name }}</h3>
        <p>{{ driver.driver.number }}</p>
        <p>{{ driver.team.name }}</p>
        <p>point : {{ driver.points }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'DriverSlide',
  components: {swiper, swiperSlide},
  data: function() {
    return {
      index: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
}
</script>

<style>
.swiper {
  height: 300px;
  width: 100%;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
