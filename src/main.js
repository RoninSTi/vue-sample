import Vue from 'vue/dist/vue.js';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App },
});
