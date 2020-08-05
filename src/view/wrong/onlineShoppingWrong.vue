<template>
  <div>
    Using debit card or credit card will make you data in cookies. If some Attackers cut those cookies, they may get
    your bank information. But luckily, you buy the nice cloth successfully.
    <button @click="add">next</button>
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
      this.Property = this.$route.query.Property
    },
    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/shoppingTOWifi',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property
          }
        })
      },
    }
  }
</script>
<style scoped>

</style>