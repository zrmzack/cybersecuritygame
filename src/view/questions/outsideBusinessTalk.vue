<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>Come to another city for business, your workmate will talk some company decisions with you in public place. What should you do?</p>
        <el-button round>Keep talking with your workmate</el-button>
        <el-button round>ignore your workmate</el-button>
        <el-button round @click="add">Tell your workmate to stop this topic</el-button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "outsideBusiness"
    }
</script>

<style scoped>

</style>