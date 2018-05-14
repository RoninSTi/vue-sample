<template>
  <div class="home">
    <h1>HOME</h1>
    <button @click="logout">Sign out</button>
  </div>
</template>

<style>
  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>

<script>
  import { AUTH_LOGOUT } from "../../store/actions/auth";

  export default {
    name: 'Home',
    methods: {
      logout: function() {
        this.$store.dispatch(AUTH_LOGOUT).then(() => {
          this.$router.push('/login');
        });
      },
    },
  }
</script>

