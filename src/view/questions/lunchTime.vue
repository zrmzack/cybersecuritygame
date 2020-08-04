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
          <a> Money:{{money}}</a>
        </li>


      </div>
      <div class="form-wrapper">

        <div class="question">
          <p style="border-style: solid ;font-size: 30px ;background-color: white">The first day, Workmate invite you
            to have lunch together, but some important documents in your table
            need to be sorted.
            What should you do?</p>
          <div class="answer">
            <el-button round @click="add" style="font-size: 18px">A. deal with your document and tell you workmate you
              can have lunch with him next
              time.
            </el-button>
            <el-button round style="font-size: 18px" @click="jump">B. go for lunch with your workmate together
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "lunchTime",
    created() {
      console.log(this.$route.query.username)
      this.username = this.$route.query.username

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
          path: '/lunchToTransfer',
          query: {
            username: this.username,
            money: this.money,
            position: this.position
          }
        })
      },
      jump: function () {
        this.$router.push({
          path: '/lunchTimeWrong',
          query: {
            username: this.username,
            money: this.money,
            position: this.position
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
          this.position = "expert"
        }
      }
    },
    mounted: function () {
      this.getPosition()
    }


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
</style>