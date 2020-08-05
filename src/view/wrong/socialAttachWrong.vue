<template>
  <div>
    You make a big damage to the company, you lose much money too. While some virus also be automatically installed. As
    you have the vial data, do not forget to upload the firewall.
    <button @click="add">next</button>
  </div>
</template>


<script>
  export default {
    name: "socialAttachWrong",
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
          path: '/socialAttachTofirewalldata',
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