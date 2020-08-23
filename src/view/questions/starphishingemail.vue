<template>
  <div class="center-in-center">
    <div class="show">
      <h3>
        From: specialoff@starbuck.cn<br><br><br>
        Hi,
        Congratulations! Starbucks is offering regular customers a 10 percent discount Please click the following button
        to get it.
        <el-button round>Get it</el-button>
        <br>

        <br>
        <div>
          <span> <el-button round class="left" @click="left">Ignore it</el-button></span> <span> <el-button round
                                                                                                            @click="right"
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
    this.username = this.$route.query.username
    this.money = this.$route.query.money
    this.position = this.$route.query.position
    this.Property = this.$route.query.Property
    this.Bag = this.$route.query.Bag
    this.car = this.$route.query.car
    this.house = this.$route.query.house
  },
  data() {
    return {
      username: '',
      Bag: '',
      car: '',
      house: '',
      position: 'test',
      money: 0,
      Property: 0,
    }
  },
  methods: {
    left: function () {
      this.Property+=1000;
      this.$router.push({
        path: '/email3',
        query: {
          username: this.username,
          Bag: this.Bag,
          car: this.car,
          house: this.house,
          money: this.money,
          position: this.position,
          Property: this.Property
        }
      })
    },
    right: function () {
      this.Property+=1000;
      this.$router.push({
        path: '/star',
        query: {
          username: this.username,
          Bag: this.Bag,
          car: this.car,
          house: this.house,
          money: this.money,
          position: this.position,
          Property: this.Property
        }
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
h1{
  font-size: 50px;
}
</style>