<template>
  <div>
    Finish a big project, you have a short holiday. In the evening, you start watching a nice movie.
  </div>
</template>

<script>
  export default {
    name: "fireDataToWindowpop",
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
          path: '/windowPopup',
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