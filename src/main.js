import Vue from 'vue'
import App from './App.vue'
import CenterContainer from './components/lib/center-container'

Vue.config.productionTip = false

Vue.component('center-container', CenterContainer)

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
})
