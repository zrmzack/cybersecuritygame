<template>
  <div><h1>
    Username:{{username}}
    Position:{{position}}
    Money:{{money}}
    Cybersecurity
  </h1>


    <div class="form-wrapper">

      <div>
        <p @load="positionGet">Workmate invite you to have lunch together, but some important documents in your table
          need to be sorted.
          What should you do?</p>
        <el-button round @click="add">deal with your document and tell you workmate you can have lunch with him next
          time.
        </el-button>
        <el-button round>go for lunch with your workmate together</el-button>
      </div>
    </div>

  </div>


</template>

<script>
  export default {
    name: "lunchTime",
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
          path: '/transferData',
          query: {
            username: this.username,
            money: this.money,
          }
        })
      },
      getPosition: function () {
        if (this.money < 40) {
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