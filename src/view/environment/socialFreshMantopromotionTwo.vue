<template>

  <div> Congratulation,As you have strong skills, congratulate a lot to the company. You get a promotion. you are senior
    programmers now. You will meet more things. Also you can buy house now.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "promotion2",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.Property = this.$route.query.Property
    },
    data() {
      return {
        username: '',
        position: 'Senior Programmer',
        money: 0,
        Property: 0,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/projectOneToRepass',
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