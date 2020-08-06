<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        Finish a big project, you have a short holiday. In the evening, you start watching a nice movie.

      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>
<script>
  export default {
    name: "fireDataToWindowpop",
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
      add: function () {
        this.Property+=1000;
        this.$router.push({
          path: '/windowPopup',
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