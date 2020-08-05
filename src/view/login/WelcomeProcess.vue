<template>
  <div>The first day, company holds a nice party for all new employees. You make many friends in there. After that, you
    need to focus on your own work, and master the workflow.
    <button @click="add"> next</button>
  </div>
</template>

<script>
  export default {
    name: "WelcomeProcess",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username

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
          path: '/trainStaffs',
          query: {
            username: this.username,
            money: this.money,
            position: this.position
          }
        })
      },

    },

  }
</script>
<style scoped>

</style>