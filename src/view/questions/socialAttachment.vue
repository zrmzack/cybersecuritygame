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
          <p style="border-style: solid ;font-size: 30px ;background-color: white">Your boss sends you an email, it
            contains an attachment, the title of the attachment is 2021 Recruitment
            Plan. What should you do about this attachment.</p>
          <div class="answer">
            <div>
              <el-button round @click="add" style="font-size: 18px">Delete the email</el-button>
            </div>
            <br>
            <div>
              <el-button round @click="next" style="font-size: 18px">Download the Recruitment Plan</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "socialAttachment",
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
      Bag: '',
      car: '',
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
        path: '/socialAttachTofirewalldata',
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
        path: '/socialAttachWrong',
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