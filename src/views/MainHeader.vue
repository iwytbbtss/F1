<template>
  <div id="title">
    <div class="logo">
      <img src="../assets/F1-logo.png" alt="ㅂ">
    </div>
    <ul class="util_menu">
      <li v-for="(link, i) in outlinks" :key="i">
        <a :href="link.url" target="blank">
          <img :src="link.img" alt="link.ex">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data: function() {
    return {
      outlinks: [{url: "https://www.youtube.com/c/F1", img: require("../assets/icon/youtube.png"), ex: "공식유튜브"},
      {url: "https://dcinside.com/board/formula1", img: require("../assets/icon/community.png"), ex: "한국커뮤니티"},
      {url: "https://instagram.com/f1/", img: require("../assets/icon/insta.png"), ex: "공식인스타그램"}]
    }
  },
}
</script>

<style scoped>


#title {
  background-color: aquamarine;
  height: 150px;
}

@keyframes logo {
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
}

.logo {
  animation: logo 10s infinite ease-in-out;
  animation-delay: 3s;
  text-align: center;
  width: auto;
  height: auto;
  display: inline-block;
  margin-top: 20px;
}

.util_menu {
  position: absolute;
  right: 10px;
  top: 0;
  list-style: none;
}

.util_menu li {
  float: left;
  padding-right: 7px;
  margin-top: 13px;
}

.util_menu li img {
  width: 27px;
  height: 27px;
}
</style>