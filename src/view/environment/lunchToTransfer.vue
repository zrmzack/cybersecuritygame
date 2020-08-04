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
          path: '/transferData',
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
        }
      }
    },
    mounted: function () {
      this.getPosition()
    }
  }
</script>
<style scoped>
</style>