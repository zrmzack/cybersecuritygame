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
          <a> Points:{{ money }}</a> &nbsp&nbsp&nbsp  <a><span> Property: ¥{{ Property }}</span></a>
        </li>

      </div>


      <div class="form-wrapper">
        <div class="question">
          <p style="border-style: solid ;font-size: 30px ;background-color: white">One day,your workmate sends you an
            email, it
            contains some wrong spellings. And it tells you that your company email
            will expire in a week, please click this link to login to your account. What should you do?</p>
          <div class="answer">
            <div>
              <el-button round @click="next" style="font-size: 18px">Click the link</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Delete the email</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Hover over the link to see if it goes to an
                authentic
                site
              </el-button>
            </div>
            <br>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "emailAttack",
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
        path: '/emailToFireWall',
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
        path: '/emailAttackWrong',
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
  background: url("../../assets/work1.jpg");
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