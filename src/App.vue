<template>
  <div id="app">
    <GPBar/>
    <MainHeader/>
    <MainContent />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import GPBar from './components/GPbar.vue'
import MainContent from './views/MainContent.vue'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft)

//import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

//library.add(faUserSecret)

export default {
  name: 'App',
  components: {
    MainHeader,GPBar,MainView
  },
}
</script>

<style>
#app {
  margin: 0;
  text-align: center;
}
</style>
