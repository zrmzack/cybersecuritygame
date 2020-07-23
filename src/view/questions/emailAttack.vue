<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>You receive an email, which shows a link </p>
        <el-button round>go for lunch with your workmate together</el-button>
        <el-button round @click="add">let you workmate for lunch alone, and deal with your own file</el-button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "emailAttack"
    }
</script>

<style scoped>

</style>