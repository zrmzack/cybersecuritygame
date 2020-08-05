<template>
  <div>Congratulations, you have earn much in the work. You have the following treasures.</div>
</template>

<script>
  export default {
    name: "Finish",
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
        Property: 3000,
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