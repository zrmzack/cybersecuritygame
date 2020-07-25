<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>When you browsing a web, a pop-up warns you that a virus affect your computer. It give you a tip that you
          need install his software to delete the virus. What should you do?</p>
        <el-button round>Click the tip, and install the required software to deal with the software.</el-button>
        <el-button round @click="add">Close the browser</el-button>
        <el-button round @click="add">close the pop-up through red "X" in upper corner</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "windowPopup",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
      this.money = this.$router.query.username
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
          path: '/promotion',
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