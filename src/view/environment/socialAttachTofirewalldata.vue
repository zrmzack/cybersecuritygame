<template>
  <div>
    Some employee downloaded the recruit plane, The system was attacked. Many data were leaked.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "socialAttachTofirewalldata",
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
          path: '/fireWallData',
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