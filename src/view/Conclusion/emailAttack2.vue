<template>
  <div class="center-in-center">
    <div class="show">
      <h3>
        Your computer may be injected with scripts！That is also phishing email! Check the email address, myuniday is a
        fake address!!  myunidays is legal.
      </h3>

    </div>
    <el-button @click="add" class="right">Next</el-button>
  </div>
</template>

<script>
export default {
  name: "email1",
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
    add: function () {
      this.$router.push({
        path: '/email3',
        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          Property: this.Property,
          Bag: this.Bag,
          car: this.car,
        }
      })
    },
  },
}
</script>
<style scoped>
.show {
  text-align: center;
  line-height: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border-style: solid;
  margin: auto;
  height: 350px;
  width: 650px;
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

.center-in-center {
  background-image: url('../../assets/bk1.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>