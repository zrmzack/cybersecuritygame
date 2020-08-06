<template>
  <div>
    <div>car1</div>
    <button>buy1</button>
    <div>car2</div>
    <button>buy2</button>
    <div>car3</div>
    <button>buy3</button>
  </div>
</template>

<script>
  export default {
    name: "carShopping",
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
        this.Property+=1000;
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