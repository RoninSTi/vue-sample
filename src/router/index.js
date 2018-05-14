import Vue from 'vue/dist/vue.js';
import Router from 'vue-router';
import Login from '../components/login/index.vue';
import Home from '../components/home/index.vue';
import store from '../store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if(!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
}

const ifAuthenticated = (to, from, next) => {
  if(store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
  ],
});