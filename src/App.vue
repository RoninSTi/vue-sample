<template>
  <div id="app">
    <div class="main-container">
      <CenterContainer>
        <router-view></router-view>
      </CenterContainer>
    </div>
  </div>
</template>

<script>
  import CenterContainer from './components/lib/center-container.vue';
  export default {
    name: 'app',
    components: {
      CenterContainer,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
