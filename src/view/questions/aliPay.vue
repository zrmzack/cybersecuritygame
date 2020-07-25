<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>You have a nice software, it can transfer money quickly and convinenty. How to protect your own data
          safe?</p>
        <el-button round>Turn off all your app permissions</el-button>
        <el-button round @click="add">Go through and turn off some permissions</el-button>
        <el-button round>To use the software convinently, enable all permissions</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "aliPay",
    created() {
      console.log(this.$route.query.username)
      console.log(this.$route.query.money)
      this.username = this.$route.query.username
      this.money = this.$route.query.money
    },
    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
      }
    },
    methods: {
      add: function () {
        this.money += 10;
        this.$router.push({
          path: '/emailAttack',

          query: {
            username: this.username,
            money: this.money,
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>