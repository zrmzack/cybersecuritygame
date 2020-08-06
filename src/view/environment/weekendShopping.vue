<template>
  <div>
    A happy weekend is coming. you want to buy a nice cloth online.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "weekendShopping",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.position = this.$route.query.position
      this.Property = this.$route.query.Property
      this.Bag = this.$route.query.Bag
    },
    data() {
      return {
        username: '',
        Bag: '',
        position: 'test',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      add: function () {
        this.Property+=1000;
        this.$router.push({
          path: '/fireWallData',
          query: {
            username: this.username,
            Bag: this.Bag,
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