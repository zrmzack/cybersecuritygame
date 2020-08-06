<template>
  <div class="center-in-center">
    <div class="show">
      <div>
        <img src="../../assets/lv.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        4000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <span> <el-button roundstyle="font-size: 18px" @click="buy1">Buy</el-button></span>
      </div>

      <div><img src="../../assets/burberry.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        5000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        <span> <el-button roundstyle="font-size: 18px" @click="buy2">Buy</el-button></span>
      </div>
      <div><img src="../../assets/coach.jpeg" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        6000&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp

        <span> <el-button roundstyle="font-size: 18px" @click="buy3">Buy</el-button></span>
      </div>
      <div><img src="../../assets/mcm.png" alt="">
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspPrice:
        6500&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
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
      this.Property += 1000;
      this.$router.push({
        path: '/shoppingOnline',
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
      if (this.Property >= 4000) {
        this.Property -= 4000
        this.$router.push({
          path: '/shoppingOnline',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag: 'LV',
            car: '',
          }
        })
      }
    },
    buy2: function () {
      if (this.Property >= 5000) {
        this.Property -= 5000
        this.$router.push({
          path: '/shoppingOnline',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag: 'Burberry',
            car: '',
          }
        })
      }
    },
    buy3: function () {
      if (this.Property >= 6000) {
        this.Property -= 6000
        this.$router.push({
          path: '/shoppingOnline',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag: 'Coach',
            car: 'Coach'
          }
        })
      }
    },
    buy4: function () {
      if (this.Property >= 6500) {
        this.Property -= 6500
        this.$router.push({
          path: '/shoppingOnline',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag: 'MCM',
            car: 'MCM',
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
  height: 750px;
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