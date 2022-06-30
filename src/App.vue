<template>
  <div id="app">
    <MainHeader/>
    <MainContent />
    <FooterComponent />
  </div>
</template>

<script>
import MainHeader from './views/MainHeader.vue'
import MainContent from './views/MainContent.vue'
import FooterComponent from './components/Footer.vue'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight, faChevronLeft);

export default {
  name: 'App',
  components: {
    MainHeader, MainContent, FooterComponent
  },
}
</script>

<style>
body {
  margin: 0;
  text-align: center;
}

a {
  color: black;
}
</style>
