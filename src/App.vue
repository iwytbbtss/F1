<template>
  <div id="app">
    <GPBar/>
    <MainHeader/>
    <ContentBox/>
    <ChartBox/>
    <RecommandVideo/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import GPBar from './components/GPbar.vue'
import ContentBox from './components/ContentBox.vue'
import ChartBox from './components/ChartBox.vue'
import RecommandVideo from './components/RecommandVideo.vue'
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft)

//import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

//library.add(faUserSecret)

export default {
  name: 'App',
  components: {
    MainHeader,GPBar,ContentBox,ChartBox,RecommandVideo
  }
}
</script>

<style>
#app {
  margin: 0;
  text-align: center;
}
</style>
