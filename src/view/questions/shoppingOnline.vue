<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>One day, you want to buy a precious thing online. What is the safest way to pay online?</p>
        <el-button round @click="add">Use an online payment account connected to your own bank account.</el-button>
        <el-button round>Use a debit card</el-button>
        <el-button round>Use a credit card</el-button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "shoppingOnline",
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
            path: '/wifiAttack',
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