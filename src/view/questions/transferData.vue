<template>
  <div class="whole">
    <div class="header w">
      <h1>
        Cybersecurity
      </h1>
    </div>
    <div class="w">
      <div class="score">
        <li>
          <a> Username:{{username}}</a></li>
        <li>
          <a> Position:{{position}}</a>
        </li>
        <li>
          <a> Money:{{money}}</a> &nbsp&nbsp&nbsp <span> Property: ¥{{Property}}</span>
        </li>

      </div>
      <div class="form-wrapper">
        <div class="question">

          <p style="border-style: solid ;font-size: 30px ;background-color: white">When you transfer data, you want to
            go washing room. What should you do?</p>
          <div class="answer">
            <el-button round @click="next" style="font-size: 18px">Go toilet directly, let transfer data automatically</el-button>
            <el-button round @click="add" style="font-size: 18px">Stop transferring data and lock your computer
            </el-button>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "transferData",
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
        this.money += 10;
        this.$router.push({
          path: '/transferToshopping',

          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
          }
        })
      },
      next: function () {
        this.$router.push({
          path: '/transferDataWrong',
          query: {
            username: this.username,
            money: this.money,
            position: this.position,
            Property: this.Property,
          }
        })
      },

    }

  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .whole {
    background: url("../../assets/work2.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: block;
    height: 100%;
  }

  .w {
    width: 1200px;
    margin: auto;

  }

  .header {
    text-align: center;
    line-height: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    margin: 10px auto;
  }

  .score {
    height: 150px;
    color: black;
    font-size: 25px;

  }

  .score ul li a {
    display: block;
    height: 80px;
    padding: 0 10px;
    line-height: 80px;
  }

  .score ul li {
    float: left;
    margin: 0 20px;
  }

  li {
    list-style: none;
  }

  .score ul li {
    float: left;
    margin: 0 20px;
  }

  .answer {
    padding-top: 30px;

  }
</style>