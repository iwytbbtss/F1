<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(driver, i) in drivers" :key="i">
      <div>
        <img :src="require(`@/assets/driverimg/${driver.picture}`)" :alt="driver.name">
        <h3>{{ driver.name }}</h3>
        <p>{{ driver.number }}</p>
        <p>{{ driver.team }}</p>
        <p>point : {{ driver.point }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import data from '../data.json'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'DriverSlide',
  components: {swiper, swiperSlide},
  data: function() {
    return {
      drivers: data.drivers.sort(function(a, b) {return b.point-a.point}),
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
  }
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
