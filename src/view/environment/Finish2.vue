<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        Congratulations, you must learn a lot from the game! <br>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Finish",
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
      house: '',
      car: '',
      position: 'test',
      money: 0,
      Property: 0,
    }
  },
  methods: {
    add: function () {
      this.$router.push({
        path: '/fireWalldataToStarbuck',
        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          car: this.car,
          Bag: this.Bag,
          house: this.house,
          Property: this.Property,
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
  color: white;
  line-height: 60px;
height: 250px;

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