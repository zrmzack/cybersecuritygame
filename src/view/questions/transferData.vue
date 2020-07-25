<template>
  <div><h1>
    username:{{username}}
    position:{{position}}
    money:{{money}}
    cybersecurity
  </h1>

    <div class="form-wrapper">

      <div>
        <p>When you transfer data, you want to go washing room. What should you do?</p>
        <el-button round>Go toilet directly, let transfer data automatically</el-button>
        <el-button round @click="add">Stop transferring data and lock your computer</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "transferData",
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
          path: '/shoppingOnline',

          query: {
            username: this.username,
            money: this.money,
          }
        })
      },
      getPosition: function () {
        if (this.money < 40) {
          this.position = "Beginner Programmer"
        } else if (this.money >= 40 && this.money < 90) {
          this.position = "Intermediate Programmer"
        } else if (this.money >= 90 && this.money < 140) {
          this.position = "Senior Programmer"
        } else {
          this.position = "Development Manager"
        }
      }
    }

  }
</script>

<style scoped>

</style>