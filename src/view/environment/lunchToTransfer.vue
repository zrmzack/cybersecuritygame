<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        Keeping work for a long time, you have finished a lot of work! And your team leader tell you that you need to
        send
        a report to him. That may affect your performance(Promotion).
      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
export default {
  name: "lunchToTransfer",
  created() {
    console.log(this.$route.query.username)
    this.username = this.$route.query.username
    this.Property = this.$route.query.Property
    this.money = this.$route.query.money
    this.position = this.$route.query.position
  },
  data() {
    return {
      username: '',
      position: 'Beginner Programmer',
      money: 0,
      Property: 3000,
      Bag: '3000',
    }
  },
  methods: {
    add: function () {
      this.Property += 1000,
          this.$router.push({
            path: '/transferData',
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
height: 450px;
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
  background-image: url('../../assets/show3.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>