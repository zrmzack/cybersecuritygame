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
    },
    data() {
      return {
        username: '',
        position: 'test',
        money: 0,
      }
    },
    methods: {
      add: function () {
        this.$router.push({
          path: '/socialAttachment',
          query: {
            username: this.username,
            money: this.money,
            position: this.position
          }
        })
      },
      getPosition: function () {
        if (this.money < 40) {
          this.position = "Beginner Programmer"
        } else if (this.money >= 40 && this.money < 90) {
          this.position = "Intermediate Programmer"
        } else if (this.money >= 90 && this.money < 140) {
          this.position = "Senior Programmer"
        } else {
          this.position = "Development Manager"
        }
      }
    }, mounted: function () {
      this.getPosition()
    }
  }
</script>

<style scoped>

</style>