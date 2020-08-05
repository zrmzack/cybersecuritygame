<template>

  <div>
    <h1>
      Username:{{username}}
      Position:{{position}}
      Money:{{money}} &nbsp&nbsp&nbsp <span> Property: ¥{{Property}}</span>
      Cybersecurity
    </h1>
    <div class="form-wrapper">
      <div>
        <strong>Input your password to protect your vital files.</strong>
        <input placeholder="input your password" v-model="pwd" @keyup="checkPassword"></input>
      </div>
      <button @click="add">next</button>
      <p v-show="passwordAlert">Create a strong password to keep your data safe</p>
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
      this.Property = this.$route.query.Property
    },
    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
        Property: 0,
        pwd: '',
        passwordAlert: true,
      }
    },
    methods: {
      checkPassword() {
        if (this.pwd.length >= 8 && (/.*[a-z]+.*/).test(this.pwd) && (/.*[A-Z]+.*/).test(this.pwd) && (/^[0-9]*/).test(this.pwd)
            && (/.*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]+.*/).test(this.pwd)) {
          this.passwordAlert = false
        }
      },
      add: function () {
        console.log(this.pwd)
        if (this.passwordAlert == false) {
          this.money += 10;
          this.$router.push({
            path: '/projectTwo',
            query: {
              username: this.username,
              money: this.money,
              position: this.position,
              Property: this.Property,
            }
          })
        }
      },
    },
  }
</script>

<style scoped>

</style>