<template>
  <div>
    Keeping work for a long time, you have finished a lot of work! And your team leader tell you that you need to send
    a report to him. That may affect your performance(Promotion).
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "lunchToTransfer",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username
      this.Property = this.$route.query.Property
      this.money = this.$route.query.money
      this.position = this.$route.query.position
    },
    data() {
      return {
        username: '',
        position: 'Beginner Programmer',
        money: 0,
        Property:3000,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/transferData',
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