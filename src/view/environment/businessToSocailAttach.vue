<template>
  <div>
    At the night, in the hotel, you receive an email from the "boss". It seems the attachment contains the Recruitment
    Plan.
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "businessToSocailAttach",
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
        this.$router.push({
          path: '/socialAttachment',
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