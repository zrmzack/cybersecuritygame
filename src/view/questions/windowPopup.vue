<template>
  <div class="whole">
    <div class="header w">
      <h1>
        Cybersecurity
      </h1>
    </div>
    <div class="w">
      <div class="score">
        <ur>
          <li>
            <a> Username:{{username}}</a></li>
          <li>
            <a> Position:{{position}}</a>
          </li>
          <li>
            <a> Money:{{money}}</a>
          </li>


        </ur>

      </div>


    <div class="form-wrapper">

      <div class="question">
        <p style="border-style: solid ;font-size: 30px ;background-color: white">When you browsing a web, a pop-up warns you that a virus affect your computer. It give you a tip that you
          need install his software to delete the virus. What should you do?</p>
        <div class="answer">
        <el-button round style="font-size: 18px">Click the tip, and install the required software to deal with the software.</el-button>
        <el-button round @click="add" style="font-size: 18px">Close the browser</el-button>
        <el-button round @click="add" style="font-size: 18px">close the pop-up through red "X" in upper corner</el-button>
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
      this.money = this.$router.query.username
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
          path: '/promotion',
          query: {
            username: this.username,
            money: this.money,
          }
        })
      },
      getPosition: function () {
        if (this.money < 40) {
          this.position = "Beginner Programmer"
        } else if (this.money >= 40 && this.money < 90) {
          this.position = "Intermediate Programmer"
        } else if (this.money >= 90 && this.money < 140) {
          this.position = "Senior Programmer"
        } else {
          this.position = "Development Manager"
        }
      }
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