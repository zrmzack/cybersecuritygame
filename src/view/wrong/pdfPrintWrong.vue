<template>
  <div>
    you cannot put your any personal information in the public place. You may leak some vital information.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "pdfPrintWrong",
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
          path: '/promotion1',
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