<template>
  <div id="title">
    <h1>ㅂ</h1>
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
  }
}
</script>

<style scoped>
#title {
  background-color: aquamarine;
  padding: 32px;
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