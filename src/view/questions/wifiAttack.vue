<template>
  <div class="whole">
    <div class="header w">
      <h1>
        Cybersecurity
      </h1>
    </div>
    <div class="w">
      <div class="score">
        <li style="color: black">
          <a> Username:{{ username }}</a></li>
        <li style="color: black">
          <a> Position:{{ position }}</a>
        </li>
        <li style="color: black">
          <a> Points:{{ money }}</a> &nbsp&nbsp&nbsp <span> Property: ¥{{ Property }}</span>
        </li>

      </div>


      <div class="form-wrapper">

        <div class="question">
          <p style="border-style: solid ;font-size: 30px ;background-color: white">You meet a nice wifi, you need to
            send all you vital files to company, how should you do?</p>
          <div class="answer">
            <div>
              <el-button round @click="next" style="font-size: 18px">Use Hotspot to connect my device</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Connect Virtual Private Network with your own device
              </el-button>
            </div>
            <br>
            <div>
              <el-button round @click="next" style="font-size: 18px">use the public wifi to transfer data and not input
                any private information
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
  name: "wifiAttack",
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
      this.Property+=2000;
      this.$router.push({
        path: '/wifiTopdf',
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
        path: '/wifiAttackWrong',
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
  background: url("../../assets/work4.jpg");
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
  color: white;
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