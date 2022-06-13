<template>
  <div id="sidebar">
    <transition name="slide">
    <div v-if="showSche" id="schedule">
      <h2>2022 Grand Prix</h2>
      <ul>
        <li v-for="(sche, i) in gplist" :key="i">{{ sche.date+" : "+sche.track }}</li>
      </ul>
    </div>
    </transition>
    <div id="logo" @click="showSche=!showSche">ㅂ</div>
  </div>
</template>

<script>
export default {
  name: 'GPBar',
  data: function() {
    return {
      showSche: false,
      gplist: [
        {date: "3.18~3.20", track: "바레인"},
        {date: "3.25~3.27", track: "사우디아라비아"},
        {date: "4.8~4.10", track: "호주"},
        {date: "4.22~4.24", track: "이몰라"},
        {date: "5.6~5.8", track: "마이애미"},
        {date: "5.20~5.22", track: "스페인"},
        {date: "5.27~5.29", track: "모나코"},
        {date: "6.10~6.12", track: "아제르바이잔"},
        {date: "6.17~6.19", track: "캐나다"},
        {date: "7.1~7.3", track: "영국"},
        {date: "7.8~7.10", track: "오스트리아"},
        {date: "7.22~7.24", track: "프랑스"},
        {date: "7.29~7.31", track: "헝가리"},
        {date: "8.26~8.28", track: "벨기에"},
        {date: "9.2~9.4", track: "네덜란드"},
        {date: "9.9~9.11", track: "몬자"},
        {date: "9.30~10.2", track: "싱가포르"},
        {date: "10.7~10.9", track: "일본"},
        {date: "10.21~10.23", track: "미국"},
        {date: "10.28~10.30", track: "멕시코"},
        {date: "11.11~11.13", track: "브라질"},
        {date: "11.18~11.20", track: "아부다비"}
      ]
    }
  }
}
</script>

<style scoped>
#sidebar {
  position: relative;
}

#logo {
  position: absolute;
  font-size: 21px;
  font-style: italic;
  font-weight: bold;
  padding: 2px;
  margin-left: 5px;
}

#schedule {
  position: absolute;
  width: 300px;
  height: 100vh;
  background-color: lightyellow;
}

#schedule ul {
  list-style: none;
}

.slide-enter-active {
  transition:all .5s ease-out;
}
.slide-leave-active {
  transition: all .4s ease-in;
}
.slide-enter, .slide-leave-to {
  left: -22%;
}
.slide-enter-to, .slide-leave {
  left: 0%;
}
</style>