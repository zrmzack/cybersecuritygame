

<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        As the development of science, an software named alipay become more and more popular, most of your friends recommend
        you to install. To make your life more convenient, you install the Alipay.
      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
  export default {
    name: "Alipaybefore",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.Property = this.$route.query.Property
      this.Bag = this.$route.query.Bag
      this.car = this.$route.query.car
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
        this.Property+=1000;
        this.$router.push({
          path: '/aliPay',
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
  height: 600px;
  line-height: 50px;
  width: 650px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border-style: solid;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 50px;
  color: black;
  line-height: 60px;
  background: rgba(255, 255, 255, 0.6);

}

.next {
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 60px;
  width: 150px;
  font-size: 30px;
}

.center-in-center {
  background-image: url('../../assets/show10.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>