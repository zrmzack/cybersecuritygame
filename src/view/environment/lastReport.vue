<template>
  <div> One month later, you make a big progress, and this afternoon, you need to make a report to the leaders. This will be your work report.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "lastReport",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
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
          path: '/promotion',
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