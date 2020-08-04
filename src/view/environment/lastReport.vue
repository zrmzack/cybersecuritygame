<template>
  <div> 1 month later, you have learn the basic process about your work, and you need to solve the later problems by
    yourself. ......
    <button @click="add">next</button>
  </div>
</template>

<script>
  export default {
    name: "lastReport",
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
        this.money += 10;
        this.$router.push({
          path: '/promotion',
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