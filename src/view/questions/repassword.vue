<template>

  <div>
    <h1>
      Username:{{username}}
      Position:{{position}}
      Money:{{money}}
      Cybersecurity
    </h1>
    <div class="form-wrapper">
      <div>
        <strong>Input your password to protect your vital files.</strong>
        <input placeholder="input your password" v-model="pwd" @keyup="add"></input>
      </div>
      <button>next</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "password",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.position = this.$route.query.position
    },
    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
        pwd: '',
      }
    },
    methods: {
      add: function () {
        console.log(this.pwd)
        this.money += 10;
        this.$router.push({
          path: '/projectTwo',
          query: {
            username: this.username,
            money: this.money,
            position: this.position
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
    },
    mounted: function () {
      this.getPosition()
    }
  }
</script>

<style scoped>

</style>