<template>

  <div class="form-wrapper">

    <div>
      <p>After you print a vital pdf in public computer, how to deal with the pdf in the computer?</p>
      <el-button round>Put it in the computer,maybe you need print it next time</el-button>
      <el-button round @click="add">move to trash bin and delete it </el-button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "pdfPrint"
  }
</script>

<style scoped>

</style>