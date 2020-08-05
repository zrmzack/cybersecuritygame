<template>
  <div>after you finish a week work, you want to buy something for yourself.
    <button @click="add">next</button>
  </div>
</template>
<script>
  export default {
    name: "transferToshopping",
    created() {
      this.username = this.$route.query.username
      this.Property = this.$route.query.Property
      this.money = this.$route.query.money
      this.position = this.$route.query.position

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
          path: '/shoppingOnline',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
          }
        })
      },

    },

  }
</script>
<style scoped>

</style>