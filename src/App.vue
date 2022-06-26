<template>
  <div id="app">
    <MainHeader/>
    <MainContent />
  </div>
</template>

<script>
import MainHeader from './views/MainHeader.vue'
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
    MainHeader, MainContent
  },
}
</script>

<style>
body {
  margin: 0;
  text-align: center;
}
</style>
