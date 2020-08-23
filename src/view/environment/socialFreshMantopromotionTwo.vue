<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        Congratulations, As you have strong skills, contribute a lot to the company. You get a promotion. you are a senior
        programmers now. You will meet more things. Also you can buy house now.
      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
  export default {
    name: "promotion2",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.Bag = this.$route.query.Bag
      this.car = this.$route.query.car
      this.Property = this.$route.query.Property

    },
    data() {
      return {
        username: '',
        Bag: '',
        car: '',
        position: 'Senior Programmer',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      add: function () {
        this.Property+=1000;
        this.$router.push({
          path: '/HouseShopping',
          query: {
            username: this.username,
            money: this.money,
            Bag: this.Bag,
            car: this.car,
            position: this.position,
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