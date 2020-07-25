<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>You have a nice software, it can transfer money quickly and convinenty. How to protect your own data
          safe?</p>
        <el-button round>Turn off all your app permissions</el-button>
        <el-button round>Go through and turn off some permissions</el-button>
        <el-button round @click="add">To use the software convinently, enable all permissions</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "aliPay"
  }
</script>

<style scoped>

</style>