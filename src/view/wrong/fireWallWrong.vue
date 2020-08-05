<template>
  <div>
    Update the firewall on time, some of employees make a big damage to the company. Firewall can help you to defend the virus.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "fireWallWrong",
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
          path: '/firewallToSocial',
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