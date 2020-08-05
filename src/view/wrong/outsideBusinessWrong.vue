<template>
  <div>
    donot talk with any company information outside, or those data will be leaked.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "outsideBusinessWrong",
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
          path: '/businessTosocialAttach',
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