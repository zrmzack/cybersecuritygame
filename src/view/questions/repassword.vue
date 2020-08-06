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
          <a> Username:{{username}}</a></li>
        <li style="color: black">
          <a> Position:{{position}}</a>
        </li>
        <li style="color: black">
          <a> Points:{{money}}</a> &nbsp&nbsp&nbsp <span> Property: ¥{{Property}}</span>
        </li>


      </div>
      <div class="form-wrapper">
        <div>
          <h2>Input your password to protect your vital files.</h2>
          <input placeholder="input your password" v-model="pwd" @keyup="checkPassword"></input>
        </div>
        <el-button round @click="add">next</el-button>
        <p v-show="passwordAlert" style="color: red">Create a strong password to keep your data safe</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "password",
    created() {
      console.log(this.$route.query.username)
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
        pwd: '',
        Bag: '',
        car: '',
        passwordAlert: true,
      }
    },
    methods: {
      checkPassword() {
        if (this.pwd.length >= 8 && (/.*[a-z]+.*/).test(this.pwd) && (/.*[A-Z]+.*/).test(this.pwd) && (/^[0-9]*/).test(this.pwd)
            && (/.*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]+.*/).test(this.pwd)) {
          this.Property+=2000;
          this.passwordAlert = false
        }
      },
      add: function () {
        console.log(this.pwd)
        if (this.passwordAlert == false) {
          this.money += 10;
          this.$router.push({
            path: '/projectTwo',
            query: {
              username: this.username,
              money: this.money,
              position: this.position,
              Property: this.Property,
              Bag: this.Bag,
              car: this.car,
            }
          })
        }
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