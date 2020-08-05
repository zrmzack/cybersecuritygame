<template>
  <div>Congratulations, you are now middle programmer, you have the right to buy car now.
    <button @click="next">next</button></div>
</template>

<script>
  export default {
    name: "promotion1",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.Property = this.$route.query.Property
    },
    data() {
      return {
        username: '',
        position: 'middle programmer',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      next: function () {
        this.$router.push({
          path: '/Alipaybefore',
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