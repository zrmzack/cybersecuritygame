<template>

  <div class="blue_bg">
    <div class="introduction">


      You will encounter many work scenarios!<br> Avoid some cyberattacks!<br> Try to get promotion and earn much money!

    </div>
    <el-button type="primary" class="login" @click="gotologin()">Login</el-button>
  </div>
</template>

<script>

  export default {
    name: "intro",

    methods: {
      gotologin: function () {
        this.$router.push({path: '/password'})
      }
    }
  }
</script>

<style >

  .introduction {
    text-align: center;
    height: 450px;
    line-height: 90px;
    width: 650px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    border-style: solid;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 35px;
    color: white;


  }

  .login {
    position: fixed;
    bottom: 40px;
    right: 40px;
    height: 50px;
    width: 150px;
    font-size: 30px;
  }

  .blue_bg {
    background-image: url('../../assets/bk.jpeg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: block;
    height: 100%;

  }
</style>