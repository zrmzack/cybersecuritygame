<template>
  <div>
    Luckily, you send all data to the partners successfully. But, be awareness, you need update the firewall on time.
    Or, some virus can attack your computer easily.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "firewalldataWrong",
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
          path: '/fireDataToWindowpop',
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