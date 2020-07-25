<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>You meet a nice wifi, you need to send all you vital files to company, how should you do?</p>
        <el-button round>Use Hotspot to connect my device</el-button>
        <el-button round @click="add">Connect Virtual Private Network with your own device </el-button>
        <el-button round >use the public wifi to transfer data and not input any private information </el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "wifiAttack",
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
          path: '/pdfPrint',
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
          this.position="Development Manager"
        }
      }
    }


  }
</script>

<style scoped>

</style>