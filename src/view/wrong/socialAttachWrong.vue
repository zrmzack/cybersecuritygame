
<template>
  <div class="center-in-center">
    <div class="show">
      <h1>
        You make a big damage to the company, you lose much money too. While some virus also be automatically installed. As
        you have the vial data, do not forget to upload the firewall.
      </h1>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
  export default {
    name: "socialAttachWrong",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.position = this.$route.query.position
      this.Property = this.$route.query.Property/2
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
        this.$router.push({
          path: '/socialAttachTofirewalldata',
          query: {
            username: this.username,
            Bag: this.Bag,
            car: this.car,
            money: this.money,
            position: this.position,
            Property: this.Property,
            house: this.house,
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
  background-image: url('../../assets/show18.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>