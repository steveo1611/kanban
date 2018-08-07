<template>
  <div id="app">
  <div class="header-top">
<div class="header animated rubberBand"><h1>Tril-Kanban</h1></div>
    <h2>Hello </h2>
    <img id = 'theV' src="./assets/logo.png"><br>
    <button @click="userLogout">LOGOUT</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      userLogout() {
        this.$store.dispatch('logout', this.logout)
      }
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
  }
  #theV{
    width: 1.5rem;
  }
  .header-top{
    background-color: cornflowerblue
  }
</style>