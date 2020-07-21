<template>
  <div class="login_form" id="form">
    <h1>Cyber security</h1>

    <!--            <label for="username">Username</label>-->
    <input class="qxs-ic_user qxs-icon" id="username" type="text" name="username" placeholder="用户名"
           @blur="checkUserName()" v-model="username  "/>
    <p v-show="usernameAlert">len enough</p>
    <br>
    <!--            <label for="password1">Password</label>-->
    <input class="qxs-ic_password qxs-icon" placeholder="Password" id="password1" type="text" name="password1"/>
    <br>
    <!--            <label for="password2">Confirm Password</label>-->
    <input class=" qxs-ic_confirm qxs-icon" placeholder="Confirm Password" id="password2" type="text" name="Password2"/>
    <br>
    <el-button class="login_btn" type="button" @click="jump()">Start</el-button>

  </div>


</template>


<script>
  export default {
    name: "password",
    data() {
      return {
        username: '',
        pwd1: '',
        pwd2: '',
        usernameAlert: false
      }
    },
    methods: {
      checkUserName() {
        // 判断自己写
        console.log(this.username.length)
        if (this.username.length > 1) {
          console.log('???')

          this.usernameAlert = true
        }
      },
      jump() {
        console.log(this.username)
        this.$router.push({
          path: "/lunchTime",
          query: {
            username: this.username
          }
        })
      }
    }
  }
</script>

<style scoped>
  input::placeholder{
    color: white;
  }

  * {

    background-image: url('../../assets/bk.jpeg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

  }

  h1{
    text-align: center;
    font-size: 50px;
    color: white;
  }
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;

  }


  .qxs-ic_user {
    background: url("../../assets/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }

  .qxs-ic_password {
    background: url("../../assets/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }

  .qxs-ic_confirm {
    background: url("../../assets/password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 40px;
  }

  .qxs-icon {
    height: 40px;
    width: 90%;
    margin-bottom: 5px;
    padding-left: 10%;
    border: 0;
    border-bottom: solid 1px lavender;
  }


  .login_btn {
    width: 100%;
    font-size: 30px;
    color: white;
    margin-top: 80px;
    background: -webkit-linear-gradient(left, dodgerblue, cornflowerblue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, dodgerblue, cornflowerblue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, dodgerblue, cornflowerblue); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, dodgerblue, cornflowerblue); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>