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
          <a> Points:{{ money }}</a> &nbsp&nbsp&nbsp <a><span> Property: ¥{{ Property }}</span></a>
        </li>


      </div>


      <div class="form-wrapper">
        <div class="question">

          <p style="border-style: solid ;font-size: 30px ;background-color: white">You have a nice software, it can
            transfer money quickly and convinenty. How to protect your own data
            safe?</p>
          <div class="answer">
            <div>
              <el-button round @click="next" style="font-size: 18px">Turn off all your app permissions</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="add" style="font-size: 18px">Go through and turn off some permissions</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="next" style="font-size: 18px">To use the software convinently, enable all
                permissions
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
  name: "aliPay",
  created() {
    console.log(this.$route.query.username)
    console.log(this.$route.query.money)
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
      Bag:'',
      car:'',
    }
  },
  methods: {
    add: function () {
      this.money += 10;
      this.Property+=2000;
      this.$router.push({
        path: '/alipayToEmailAttack',

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
        path: '/aliPayWrong',
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
  background: url("../../assets/work6.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;
}

.w {
  width: 1200px;
  margin: auto;

}
h1{
  font-size: 50px;
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