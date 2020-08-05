<template>
  <div>
    As the development of science, an software named alipay become more and more popular, most of your friends recommend
    you to install. To make your life more convinent, you install the Alipay.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "Alipaybefore",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.Property = this.$route.query.Property
    },
    data() {
      return {
        username: '',
        position: 'middle programmer',
        money: 0,
        Property: 3000,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/aliPay',
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