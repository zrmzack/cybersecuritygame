<template>
  <div>after you finish a week work, you want to buy something for yourself.</div>
</template>
<script>
  export default {
    name: "transferToshopping",
    created() {
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
        this.$router.push({
          path: '/shoppingOnline',
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
    },
    mounted: function () {
      this.getPosition()
    }
  }
</script>
<style scoped>

</style>