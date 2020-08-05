<template>
  <div>
    <div>
      house1
    </div>
    <button>buy1</button>
    <div>
      house2
    </div>
    <button>buy1</button>
    <div>
      house3
    </div>
    <button>buy1</button>
  </div>
</template>


<script>
  export default {
    name: "House",
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
            Property: this.Property,
            position: this.position
          }
        })
      },
    },
  }
</script>
<style scoped>

</style>