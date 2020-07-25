<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>Your workmate sends you an email, it contains some wrong spellings. And it tells you that your company email
          will
          expire in a week, please click this link to login to your account. What should you do?</p>
        <el-button round>CLick the link</el-button>
        <el-button round @click="add">Delete the email</el-button>
        <el-button round @click="add">hover over the link to see if it goes to an authentic site</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "emailAttack",
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
          path: '/fireWall',
          query: {
            username: this.username,
            money: this.money,
          }
        })
      }, getPosition: function () {
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