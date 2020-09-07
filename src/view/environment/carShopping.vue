<template>
  <div class="center-in-center">
    <div class="show">
      <div>Property: {{Property}}</div>
      <div>
        <img src="../../assets/aodi.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        9000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <span> <el-button roundstyle="font-size: 18px" @click="buy1">Buy</el-button></span>
      </div>
      <br>
      <div><img src="../../assets/benchi.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        10000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <span> <el-button roundstyle="font-size: 18px" @click="buy2">Buy</el-button></span>
      </div>
      <br>
      <div><img src="../../assets/BMW.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        11000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

        <span> <el-button roundstyle="font-size: 18px" @click="buy3">Buy</el-button></span>
        <br>
        <br>
      </div>
      <div><img src="../../assets/luhu.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        12000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <span> <el-button roundstyle="font-size: 18px" @click="buy4">Buy</el-button></span>
      </div>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
export default {
  name: "HouseShopping",
  created() {
    this.username = this.$route.query.username
    this.Property = this.$route.query.Property
    this.money = this.$route.query.money
    this.position = this.$route.query.position
    this.Bag = this.$route.query.Bag
    this.car = this.$route.query.car
  },
  data() {
    return {
      username: '',
      position: 'test',
      money: 0,
      Property: 0,
      Bag: '',
      car: '',
    }
  },
  methods: {
    add: function () {
      this.$router.push({
        path: '/Alipaybefore',
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
    buy1: function () {
      if (this.Property >= 9000) {
        this.Property -= 9000
        this.$router.push({
          path: '/Alipaybefore',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            car: 'Audi',
            Bag:this.Bag,
          }
        })
      }
    },
    buy2: function () {
      if (this.Property >= 10000) {
        this.Property -= 10000
        this.$router.push({
          path: '/Alipaybefore',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            car: 'Mercedes-Benz',
            Bag:this.Bag,
          }
        })
      }
    },
    buy3: function () {
      if (this.Property >= 11000) {
        this.Property -= 11000
        this.$router.push({
          path: '/Alipaybefore',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag:this.Bag,
            car: 'BMW'
          }
        })
      }
    },
    buy4: function () {
      if (this.Property >= 12000) {
        this.Property -= 12000
        this.$router.push({
          path: '/Alipaybefore',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag:this.Bag,
            car: 'Land Rover',
          }
        })
      }
    },

  },

}
</script>
<style scoped>
.show {
  text-align: center;
  height: 600px;
  line-height: 50px;
  width: 900px;
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