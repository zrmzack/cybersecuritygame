<template>
  The boss give you a project, you need to go another city for business.
  Several days later, you come to shanghai with strategic cooperation. To make all the files safe, you want to use a
  strong password to encrpt the files.
</template>

<script>
  export default {
    name: "projectOne",
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
          path: '/repassword',
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