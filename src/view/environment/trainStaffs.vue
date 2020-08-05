<template>
  <div>
    As a new employee, you need to go through a probation period. Meanwhile, there will be an older employee who will
    teach you to work. Also, you need to make a report every week for what you have done.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "trainStaffs",
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
          path: '/lastReport',
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