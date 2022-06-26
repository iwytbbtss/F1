import Vue from 'vue'
import App from './App.vue'
import store from './store'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

document.cookie = "crossCookie=bar; SameSite=None; Secure";

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
