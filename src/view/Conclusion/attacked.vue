

<template>
  <div class="center-in-center">
    <div class="show">
      <h1>
        You was attacked!!!!
      </h1>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
export default {
  name: "attacked",
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
      this.$router.push({
        path: '/phishing',
        query: {

        }
      })
    },
  },
}
</script>
<style scoped>
.show {
  text-align: center;
  height: 300px;
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
  font-size: 28px;
  color: white;
  line-height: 60px;


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
  background-image: url('../../assets/bk1.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>