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
        <el-button round>1</el-button>
        <el-button round>2</el-button>
        <el-button round @click="add">3</el-button>
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