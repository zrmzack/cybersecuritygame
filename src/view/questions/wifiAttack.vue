<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>You meet a nice wifi, you need to send all you vital files to company, how should you do?</p>
        <el-button round>Use Hotspot to connect my device</el-button>
        <el-button round @click="add">Connect Virtual Private Network with your own device </el-button>
        <el-button round >use the public wifi to transfer data and not input any private information </el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "wifiAttack"
  }
</script>

<style scoped>

</style>