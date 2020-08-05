<template>
  <div>  As you are Intermediate Programmer, you are more busy with your work. Many subordinates contact with you in email.
  <button @click="add"></button>
  </div>
</template>


<script>
  export default {
    name: "alipayToEmailAttack",
    created() {
      this.username = this.$route.query.username
      this.money = this.$route.query.money
      this.position = this.$route.query.position
      this.Property=this.$route.query.Property
    },
    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
        Property:3000,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/emailAttack',
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