<template>
  <div class="center-in-center">
    <div class="show">
      <h2>
        Phishing email always have some mis-spellings. Normally, they will pretend some big companies or some of your friends and send you
        an email, which contain a link or some attachment. Now, distinguish the Phishing email.
      </h2>
    </div>
    <el-button type="info" round @click="add" class="next"> Next</el-button>
  </div>
</template>

<script>
export default {
  name: "conclusion",
  created() {

  },
  data() {
    return {

    }
  },
  methods: {
    add: function () {
      this.$router.push({
        path: '/email1',

      })
    },
  },
}
</script>
<style scoped>
.show {
  text-align: center;
  height: 600px;
  line-height: 50px;
  width: 650px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  border-style: solid;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 28px;
  color: white;
  line-height: 60px;


}

.next {
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 60px;
  width: 150px;
  font-size: 30px;
}

.center-in-center {
  background-image: url('../../assets/bk1.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: block;
  height: 100%;

}
</style>