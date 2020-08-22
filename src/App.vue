<template>
  <div id="app" style="height: 100%">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Login from "./view/login/index"

  export default {
    name: 'app',
    components: {
    },

  }
</script>

<style>
  #app {
    width: 100%;

  }

  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    /*background-image: url('assets/haker.jpg');*/
    /*background-size: 100% 100%;*/
    /*background-repeat: no-repeat;*/
  }

  #form {
    height: 100%;
  }
</style>
