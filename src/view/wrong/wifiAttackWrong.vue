<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        Do not connect any unknown wifi, that will make your personal information leak. And As you send your all files to
        team, What is more, you did a nice job in those time. Your team leader decide to show your work to boss.

      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
  export default {
    name: "wifiAttackWrong",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.position = this.$route.query.position
      this.Property = this.$route.query.Property
      this.Bag = this.$route.query.Bag
    },
    data() {
      return {
        username: '',
        Bag: '',
        position: 'test',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/wifiTopdf',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
            Bag: this.Bag,
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
  background-image: url('../../assets/show7.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>