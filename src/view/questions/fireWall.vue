<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>When you transfer data to your team members, your computer alert you need to update the firewall. What should
          you do?</p>
        <el-button round>stop transferring data temporyly, and update the firewall</el-button>
        <el-button round @click="add">ignore it</el-button>
        <el-button round @click="add">after you finish transferring data, update the firewall immediately.</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "fireWall"
  }
</script>

<style scoped>

</style>