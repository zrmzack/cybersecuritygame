<template>
  <div>  The boss give you a project, you need to go another city for business.
    Several days later, you come to shanghai with strategic cooperation. To make all the files safe, you want to use a
    strong password to encrpt the files.
    <button @click="add">next</button></div>


</template>

<script>
  export default {
    name: "projectOne",
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
          path: '/repassword',
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