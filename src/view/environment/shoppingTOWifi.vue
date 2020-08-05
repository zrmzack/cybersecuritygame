<template>
  <div>
    One day, dressing your nice cloth, you go out for business. While you need to sumbmit your work to your team, at the
    mean time, you find a nice wifi!
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "shoppingTOWifi",
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
          path: '/wifiAttack',
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