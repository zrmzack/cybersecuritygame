<template>
  <div>
    Finish a big project, you have a short holiday. In the evening, you start watching a nice movie.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "fireDataToWindowpop",
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
          path: '/windowPopup',
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