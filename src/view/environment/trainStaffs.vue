<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        As a new employee, you need to go through a probation period. Meanwhile, there will be an older employee who will
        teach you to work. Also, you need to make a report every week for what you have done.
      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>



<script>
  export default {
    name: "trainStaffs",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
      this.Property = this.$route.query.Property

    },

    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      add: function () {
        this.Property+=1000;
        this.$router.push({
          path: '/lastReport',
          query: {
            username: this.username,
            money: this.money,
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
  background-image: url('../../assets/show1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>