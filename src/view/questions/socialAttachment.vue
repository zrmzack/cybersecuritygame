<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>Your boss sends you an email, it contains an attachment, the title of the attachment is 2021 Recruitment
          Plan. What should you do about this attachment.</p>
        <el-button round @click="add">Delete the email</el-button>
        <el-button round>download the Recruitment Plan</el-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "socialAttachment",
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
          path: '/fireWallData',
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