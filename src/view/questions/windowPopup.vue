<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>When you browsing a web, a pop-up warns you that a virus affect your computer. It give you a tip that you
          need install his software to delete the virus. What should you do?</p>
        <el-button round>Click the tip, and install the required software to deal with the software.</el-button>
        <el-button round @click="add">Close the browser</el-button>
        <el-button round @click="add">close the pop-up through red "X" in upper corner</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "windowPopup"
  }
</script>

<style scoped>

</style>