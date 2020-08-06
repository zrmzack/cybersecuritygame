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
          <p style="border-style: solid ;font-size: 30px ;background-color: white">When you watching a movie, a pop-up
            warns you that a virus affect your computer. It give you a tip that you
            need install his software to delete the virus. What should you do?</p>
          <div class="answer">
            <div>
              <el-button round @click="next" style="font-size: 18px">Click the tip, and install the required software to
                deal with the
                software.
              </el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Close the browser</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Close the pop-up through red "X" in upper corner
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
  name: "windowPopup",
  created() {
    console.log(this.$route.query.username)
    this.username = this.$route.query.username
    this.money = this.$route.query.money
    this.position = this.$route.query.position
    this.Property = this.$route.query.Property
    this.Bag = this.$route.query.Bag
    this.car = this.$route.query.car
    this.house = this.$route.query.house
  },
  data() {
    return {
      username: '',
      Bag: '',
      car: '',
      position: 'test',
      money: 0,
      Property: 0,
      house: '',
    }
  },
  methods: {
    add: function () {
      this.money += 10;
      this.Property+=2000;
      this.$router.push({
        path: '/Finish',
        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          Property: this.Property,
          Bag: this.Bag,
          car: this.car,
          house: this.house,
        }
      })
    },
    next: function () {
      this.money += 10;
      this.$router.push({
        path: '/windowsUpWrong',
        query: {
          username: this.username,
          money: this.money,
          position: this.position,
          Property: this.Property,
          Bag: this.Bag,
          car: this.car,
          house: this.house,
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
  background: url("../../assets/work5.jpg");
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