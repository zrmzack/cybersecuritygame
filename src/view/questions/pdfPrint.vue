<template>
  <div>  <h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>

  <div class="form-wrapper">

    <div>
      <p>After you print a vital pdf in public computer, how to deal with the pdf in the computer?</p>
      <el-button round>Put it in the computer,maybe you need print it next time</el-button>
      <el-button round @click="add">move to trash bin and delete it</el-button>
    </div>
  </div>
  </div>

</template>

<script>
  export default {
    name: "pdfPrint",
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
          this.position="Development Manager"
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