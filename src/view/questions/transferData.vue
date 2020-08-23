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
          <a> Username:{{ username }}</a></li>
        <li>
          <a> Position:{{ position }}</a>
        </li>
        <li>
          <a> Points:{{ money }}</a> &nbsp&nbsp&nbsp <span> Property: ¥{{ Property }}</span>
        </li>

      </div>
      <div class="form-wrapper">
        <div class="question">

          <p style="border-style: solid ;font-size: 30px ;background-color: white">You find that your computer always has a background program running, although it does not interfere with your normal use of the computer, how should you handle this situation？</p>
          <div class="answer">
            <div>
              <el-button round @click="next" style="font-size: 18px">Ask your workmate to check it
              </el-button>
            </div>
            <br>
            <div>
              <el-button round @click="next" style="font-size: 18px">Ignore it
              </el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Tell the company's technical team
              </el-button>
            </div>
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
      Bag: '',
      position: 'test',
      money: 0,
      Property: 0,
    }
  },
  methods: {
    add: function () {
      this.money += 10;
      this.Property += 2000;
      this.$router.push({
        path: '/transferToshopping',
        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          Property: this.Property,
          Bag: this.Bag,
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
          Bag: this.Bag,
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
h1{
  font-size: 50px;
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
h1{
  font-size: 50px;
}
</style>