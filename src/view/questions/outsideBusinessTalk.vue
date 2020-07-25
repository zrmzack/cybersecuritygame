<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>Come to another city for business, your workmate will talk some company decisions with you in public place.
          What should you do?</p>
        <el-button round>Keep talking with your workmate</el-button>
        <el-button round>ignore your workmate</el-button>
        <el-button round @click="add">Tell your workmate to stop this topic</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "outsideBusiness",
    created() {
      console.log(this.$route.query.username)
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
          path: '/socialAttachment',
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
    },
    mounted: function () {
      this.getPosition()
    }

  }
</script>

<style scoped>

</style>