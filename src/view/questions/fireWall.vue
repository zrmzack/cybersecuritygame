<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p>When you transfer data to your team members, your computer alert you need to update the firewall. What should
          you do?</p>
        <el-button round @click="add">stop transferring data temporyly, and update the firewall</el-button>
        <el-button round>ignore it</el-button>
        <el-button round @click="add">after you finish transferring data, update the firewall immediately.</el-button>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "fireWall",
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
          path: '/socialFreshMan',

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