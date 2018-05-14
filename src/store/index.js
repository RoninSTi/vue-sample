import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

// eslint-disable-next-line
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
  },
  strict: debug,
});