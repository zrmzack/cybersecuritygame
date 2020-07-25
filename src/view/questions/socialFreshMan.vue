<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>One day, you got a call, he described himself as a new employee. He said he could not log into the system. He
          wanted you could help him to login to system. What should you do?</p>
        <el-button round>Ignore him</el-button>
        <el-button round>Help him to login the system</el-button>
        <el-button round @click="add">Check his employment information, consider whether to help him</el-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "socialFreshMan",
    created() {
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
          path: '/repassword',
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
    }, mounted: function () {
      this.getPosition()
    }
  }
</script>

<style scoped>

</style>