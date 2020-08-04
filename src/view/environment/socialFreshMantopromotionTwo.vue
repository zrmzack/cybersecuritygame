<template>
  Congratulation,As you have strong skills, congratulate a lot to the company. You get a promotion. you are senior
  programmers now. You will meet more things. Also you can buy house now.

</template>


<script>
  export default {
    name: "promotion2",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.position = this.$route.query.position
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
        this.$router.push({
          path: '/projectOneToRepass',
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
        }
      }
    }, mounted: function () {
      this.getPosition()
    }
  }
</script>
<style scoped>

</style>