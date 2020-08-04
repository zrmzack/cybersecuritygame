<template>
  <div> Having a nice party with all new employees. It is time to know the processes about your own work.
    <button @click="add"> next</button>
  </div>
</template>

<script>
  export default {
    name: "WelcomeProcess",
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
          path: '/trainStaffs',
          query: {
            username: this.username,
            money: this.money,
            position: this.position
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
          this.position = "expert"
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