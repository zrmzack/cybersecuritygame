<template>
  <div>
    Using debit card or credit card will make you data in cookies. If some Attackers cut those cookies, they may get
    your bank information. But luckily, you buy the nice cloth successfully.
  </div>
</template>

<script>
  export default {
    name: "onlineShoppingWrong",
    created() {
      console.log(this.$route.query.username)
      console.log(this.$route.query.money)
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
        this.money += 10;
        this.$router.push({
          path: '/shoppingTOWifi',
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
          this.position = "Development Manager"
        }
      }
    }

  }
</script>
<style scoped>

</style>