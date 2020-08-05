<template>
  <div>
    Do not connect any unknown wifi, that will make your personal information leak. And As you send your all files to
    team, What is more, you did a nice job in those time. Your team leader decide to show your work to boss.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "wifiAttackWrong",
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
          path: '/wifiTopdf',
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