<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>The firewall need to be update, it will take some time to update it. Do you want to stop your work and update
          it?</p>
        <el-button round>Keep on working, after finish all work, then upload the firewall</el-button>
        <el-button round>ignore it</el-button>
        <el-button round @click="add">stop the work, and upload firewall first</el-button>
      </div>
    </div>

  </div>


</template>

<script>
  export default {
    name: "lunchTime",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
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
      }
    }

  }
</script>

<style scoped>

</style>