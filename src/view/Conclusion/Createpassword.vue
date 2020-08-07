<template>
  <div class="login_form" id="form">
    <input class="qxs-ic_password qxs-icon" placeholder="Password1" id="password1" type="text" name="password1"
           v-model="pwd1" @keyup="checkPassword1()"/>
    <br>
    <input class=" qxs-ic_confirm qxs-icon" placeholder="Confirm Password1"
           id="password2" type="text" name="Password2" @keyup="checkPassword1()"
           v-model="pwd2"/>
    <br>
    <br>
    <br>
    <p v-show="passwordAlert1">Input a Strong password</p>
    <input class="qxs-ic_password qxs-icon" placeholder="Password1" id="password3" type="text" name="password1"
           v-model="pwd3" @keyup="checkPassword2()"/>
    <br>
    <input class=" qxs-ic_confirm qxs-icon" placeholder="Confirm Password1"
           id="password4" type="text" name="Password2" @keyup="checkPassword2()"
           v-model="pwd4"/>
    <br>
    <br>
    <br>
    <p v-show="passwordAlert2">Input a Strong password</p>

    <input class="qxs-ic_password qxs-icon" placeholder="Password1" id="password5" type="text" name="password1"
           v-model="pwd5" @keyup="checkPassword3()"/>
    <br>
    <input class=" qxs-ic_confirm qxs-icon" placeholder="Confirm Password1"
           id="password6" type="text" name="Password2" @keyup="checkPassword3()"
           v-model="pwd6"/>
    <br>
    <p v-show="passwordAlert2">Input a Strong password</p>
    <el-button class="login_btn" type="button" @click="jump()">Next</el-button>
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
      pwd3: '',
      pwd4: '',
      pwd5: '',
      pwd6: '',
      passwordAlert1: true,
      passwordAlert2: true,
      passwordAlert3: true
    }
  },
  methods: {
    checkPassword1() {
      if (this.pwd1 === this.pwd2) {
        if (this.pwd1.length < 8) {
          this.passwordAlert1 = true

        } else if (this.pwd1.length >= 8 && (/.*[a-z]+.*/).test(this.pwd1) && (/.*[A-Z]+.*/).test(this.pwd1) && (/^[0-9]*/).test(this.pwd1)
            && (/.*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]+.*/).test(this.pwd1)) {
          this.passwordAlert1 = false
        }
      }
      if (this.pwd1 !== this.pwd2) {
        this.passwordAlert1 = true
      }
    },

    checkPassword2() {
      if (this.pwd3 === this.pwd4) {
        if (this.pwd3.length < 8) {
          this.passwordAlert2 = true

        } else if (this.pwd3.length >= 8 && (/.*[a-z]+.*/).test(this.pwd3) && (/.*[A-Z]+.*/).test(this.pwd3) && (/^[0-9]*/).test(this.pwd3)
            && (/.*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]+.*/).test(this.pwd3) && this.pwd3 != this.pwd1) {
          this.passwordAlert2 = false
        }
      }
      if (this.pwd4 !== this.pwd3) {
        this.passwordAlert2 = true
      }
    },

    checkPassword3() {
      if (this.pwd5 === this.pwd6) {
        if (this.pwd5.length < 8) {
          this.passwordAlert3 = true

        } else if (this.pwd5.length >= 8 && (/.*[a-z]+.*/).test(this.pwd5) && (/.*[A-Z]+.*/).test(this.pwd5) && (/^[0-9]*/).test(this.pwd5)
            && (/.*[~!@#$%^&*()_+|<>,.?/:;'\\[\\]+.*/).test(this.pwd5) && this.pwd3 != this.pwd5 && this.pwd1 != this.pwd5) {
          this.passwordAlert3 = false
        }
      }
      if (this.pwd4 !== this.pwd3) {
        this.passwordAlert3 = true
      }
    },
    jump() {
      if (this.passwordAlert3 == false && this.passwordAlert1 == false && this.passwordAlert2 == false) {

        this.$router.push({path: '/phishing'})
      }

    }

  }
}
</script>

<style scoped>
input::placeholder {
  color: white;
}

* {

  background-image: url('../../assets/bk.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;

}

h1 {
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