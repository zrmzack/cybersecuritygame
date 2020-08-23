<template>
  <div class="center-in-center">
    <div class="show">
      <h3>
        From: sheffield.ac.uk<br><br><br>
        Hi,
        Congratulations on your graduation! As Covd-19, you may not return school for your graduation ceremony. At the
        same time, we will send your diploma according to the address you fill in。
        <el-button round>Fill</el-button>
        <br>

        <br>
        <div>
          <span> <el-button round class="left" @click="left">Ignore</el-button></span> <span> <el-button round
                                                                                                           @click="right"
                                                                                                           class="right">Fill</el-button></span>
        </div>


      </h3>

    </div>
  </div>
</template>

<script>
export default {
  name: "email2",
  created() {
  },
  data() {
    return {
      username: '',
      position: 'Middle Programmer',
      money: 0,
      Property: 3000,
      Bag: '',
      car: '',
    }
  },
  methods: {
    left: function () {
      this.$router.push({
        path: '/LoseAll',
      })
    },
    right: function () {
      this.$router.push({
        path: '/Finish2',
      })
    },
  },
}
</script>
<style scoped>
.show {
  text-align: left;
  line-height: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border-style: solid;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 28px;
  color: white;
  line-height: 60px;
height: 300px;

}

.right {
  position: fixed;
  bottom: 40px;
  right: 80px;
  height: 60px;
  width: 285px;
  font-size: 30px;
}

.left {
  position: fixed;
  bottom: 40px;
  left: 80px;
  height: 60px;
  width: 200px;
  font-size: 30px;
}

.center-in-center {
  background-image: url('../../assets/bk1.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>