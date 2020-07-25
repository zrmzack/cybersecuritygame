<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>Your workmate sends you an email, it contains some wrong spellings. And it tells you that your company email
          will
          expire in a week, please click this link to login to your account. What should you do?</p>
        <el-button round>CLick the link</el-button>
        <el-button round @click="add">Delete the email</el-button>
        <el-button round @click="add">hover over the link to see if it gose to an authentic site</el-button>
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