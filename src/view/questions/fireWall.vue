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
          <a> Points:{{ money }}</a> &nbsp&nbsp&nbsp <a><span> Property: ¥{{ Property }}</span></a>
        </li>


      </div>


      <div class="form-wrapper">
        <div class="question">
          <p style="border-style: solid ;font-size: 30px ;background-color: white">When you transfer data to your team
            members, your computer alert you need to update the firewall. What should you do?</p>
          <div class="answer">
            <div>
              <el-button round @click="add" style="font-size: 18px">Stop transferring data temporarily, and update the
                firewall
              </el-button>
            </div>
            <br>
            <div>
              <el-button round @click="next" style="font-size: 18px">Ignore it</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">After you finish transferring data, update the
                firewall immediately.
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
  name: "fireWall",
  created() {
    this.username = this.$route.query.username
    this.money = this.$route.query.money
    this.position = this.$route.query.position
    this.Property = this.$route.query.Property
    this.Bag = this.$route.query.Bag
    this.car = this.$route.query.car
  },
  data() {
    return {
      username: '',
      position: 'test',
      money: 0,
      Property: 0,
      Bag: '',
      car: '',
    }
  },
  methods: {
    add: function () {
      this.money += 10;
      this.Property+=2000;
      this.$router.push({
        path: '/firewallToSocial',

        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          Property: this.Property,
          Bag: this.Bag,
          car: this.car,
        }
      })
    },
    next: function () {
      this.$router.push({
        path: '/fireWallWrong',
        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          Property: this.Property,
          Bag: this.Bag,
          car: this.car,
        }
      })
    },
  },
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
h1{
  font-size: 50px;
}

</style>