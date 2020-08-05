<template>
  <div>
    You have great skills to solve problems about IT. So many freshman will ask you some questions.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "firewallToSocial",
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
          path: '/socialFreshMan',
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