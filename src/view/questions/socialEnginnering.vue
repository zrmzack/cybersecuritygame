<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>Workmate invite you to have lunch together, but some important documents put in your table, you need some
          time to deal with it, or let your workmate go for lunch alone?</p>
        <el-button round>go for lunch with your workmate together</el-button>
        <el-button round @click="add">let you workmate for lunch alone, and deal with your own file</el-button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "socialEnginnering"
    }
</script>

<style scoped>

</style>