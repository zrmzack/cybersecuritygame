<template>
  <div class="center-in-center">
    <div class="show">
      <br>
      <a> https://www.baidus.com/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span><button round
                                                                                                                @click="choose1">select</button></span>
      </a>
      <a>https://www.googles.com/
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span><button round
                                                                                       @click="choose2">select</button></span>
      </a>

      <a>https://www.sheffield.ac.uk/
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span><button round
                                                                                       @click="choose4">select</button></span>
      </a>

    </div>
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
    choose1: function () {
      this.$router.push({
        path: '/baidu',
        query: {

        }
      })
    },
    choose2: function () {
      this.$router.push({
        path: '/google',
        query: {
        }
      })
    },
    choose3: function () {
      this.$router.push({
        path: '/attacked',
        query: {
        }
      })
    },
    choose4: function () {
      this.$router.push({
        path: '/phishingEmail',
        query: {

        }
      })
    },
    choose5: function () {
      this.$router.push({
        path: '/attacked',
        query: {
        }
      })
    },


  },
}
</script>
<style scoped>
.show {
  text-align: center;
  height: 300px;
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