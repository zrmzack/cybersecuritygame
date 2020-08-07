<template>
  <div class="center-in-center">
    <div class="show">
      <h3>
        From: offers@m.myuniday.com<br><br><br>
        Hi,
        Congratulations! As you used the unidays offer to buy a Nike shoes before. Now, You are our lucky user! You have
        an chance to get a 90% Discount. Please click the following button to get it.
        <el-button round>Get it</el-button>
        <br>

        <br>
        <div>
          <span> <el-button round class="left">Phishing</el-button></span> <span> <el-button round @click="right"
                                                                                             class="right">Get it</el-button></span>
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
        path: '/email3',

      })
    },
    right: function () {
      this.$router.push({
        path: '/emailAttack2',
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