<template>
  <div>
    Although, you are really busy about your work, but you do make a big misstake, many user information was leak, the
    boss decided to punish you.
    you have lose moeny. While, at the same time, as you have so strong skills, boss want to give you a promotion.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "socailFreshManWrong",
    created() {
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
          path: '/fireWallData',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property
          }
        })
      },

    },
  }
</script>
<style scoped>

</style>