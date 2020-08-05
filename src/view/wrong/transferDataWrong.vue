<template>
  <div>
    When you leaving your office desk, you need better to lock your computer! And luckily, you send data to your team
    leader on time!
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "transferDataWrong",
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
          path: '/transferToshopping',
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