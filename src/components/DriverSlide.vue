<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(driver, i) in this.$store.getters.getCSDrivers" :key="i">
      <div>
        <img :src="driver.driver.image" :alt="driver.driver.name" class="driver_img">
        <h3>{{ driver.driver.name }}</h3>
        <p><i>{{ driver.driver.number }}</i></p>
        <p>point : {{ driver.points }}</p>
        <p>{{ driver.team.name }}</p>
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
.swiper-container {
  height: fit-content;
  width: 300px;
  margin: 30px 0;
}

.swiper-button-prev, .swiper-button-next {
  width: 0;
}

.swiper-button-prev::after, .swiper-button-next::after {
  font-size: 25px;
  font-weight: bolder;
  color: black;
}

.driver_img {
  width: 100px;
  height: 100px;
  margin: 5px;
  float: left;
}
</style>
