<template>
  <div>
    <div align="right">
      <a href="http://mail.google.com//" target="blank"><strong>
        <ins>gmail</ins>
      </strong></a>
      &nbsp&nbsp
      <a href="http://v.baidu.com/" target="blank"><strong>
        <ins>Photos</ins>
      </strong></a>
      &nbsp&nbsp
      <img src="../../assets/run.png" alt="">
      &nbsp&nbsp
    </div>
    <br/>
    <div>
      <center><img src="../../assets/google.jpeg" height="150px"></center>
    </div>

    <div>
      <center>
        <label>
          <input type="search" border:1px solid blue
                 style="height: 26px; width: 500px">
          <input type="button" style="background: #2894FF;color: white; width: 78px;height: 28px"
                 value="   搜索   ">
        </label>
        <h1>Your computer was attacked by XSS!!</h1>
        <el-button @click="back">Return</el-button>
      </center>
    </div>
    <br/><br/><br/>

    <br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>

  </div>
</template>

<script>
export default {
  name: "baidu",
  methods: {
    back: function () {
      this.$router.push({
        path: '/phishingLink',
      })
    },
  }
}
</script>

<style>
a:link {
  color: black
}

a:visited {
  color: purple
}

a:hover {
  color: blue
}

.selector {
  font-family: "Microsoft YaHei"
}
</style>