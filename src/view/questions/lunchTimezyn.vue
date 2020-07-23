<template>
  <div><h1>
    username:{{username}}
    position:{{position}}
    money:{{money}}
    cybersecurity
  </h1>


    <!--        <div id="question">-->
    <!--            <p>Workmate invite you to have lunch together, but some important documents put in your table, you need some-->
    <!--                time to deal with it, or let your workmate go for lunch alone?</p>-->
    <!--            <ul id="answers">-->
    <!--                <li>-->
    <!--                    Go for lunch with your workmate together.-->
    <!--                </li>-->
    <!--                <li>-->
    <!--                    Spend time in dealing with documents and told your workmate next time for lunch together.-->
    <!--                </li>-->
    <!--            </ul>-->
    <!--        </div>-->


    <!--        <div v-for="(qname,qindex) in qanda" v-show="qindex == curr_q_index">-->
    <div class="form-wrapper">

    <div v-for="(q,qindex) in qanda"  v-show="qindex == curr_q_index" >
      <p>Q{{qindex}}:{{q.ques}} </p>
      <el-radio v-model="myAnswer[qindex]" v-for="(itema,indexa) in q.answer" :label="indexa" border>{{itema}}</el-radio>
      <el-button  type="button" @click="show(qindex) ">Submit</el-button>
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
        money:0,
        curr_q_index: 1,

        rightAnswer: ['A', 'B','C'],
        myAnswer: {
          1: '',
          2: '',
          3:''
        },

        qanda: {
          1: {
            ques: "Workmate invite you to have lunch together, but some important documents put in your table, you need some time to deal with it, or let your workmate go for lunch alone?",
            answer: {
              A: ' Go for lunch with your workmate together.',
              B: '  Spend time in dealing with documents and told your workmate next time for lunch together.'
            }
          },
          2: {
            ques: "When you outside, you find a public wireless networks, how to use it?",
            answer: {
              A: 'Use hotspot.',
              B: 'Connect directly.',
              C:'Connect the virtual private with your own service!'

            }
          },

          3: {
            ques: "When you surf the website, a pop-up tells you that your computer has virus. And you need install his software to delete virus.",
            answer: {
              A: 'Close the website directly.',
              B: 'Take the advice of pop-up.',
              C:'Close the pop-up(red X).'

            }
          },

          4: {
            ques: "Someday you receive an email from your friend? And email show you a link about how to get a nice prize.",
            answer: {
              A: 'Click the link.',
              B: 'Ignore the email.',
              C:' Ask your friend about it.'

            }
          },


          5: {
            ques: "You receive an email from your company manager, he tells you need to change your email account as it will expire (Click here).",
            answer: {
              A: 'Click the link to see if it is ok.',
              B: 'Delete email.',
              C:'C Hover the link to see where it go.'

            }
          },

          6: {
            ques: " Update fire wall1.",
            answer: {
              A: 'quest1.',
              B: 'question2.',
              C:'question3'

            }
          },
          7: {
            ques: " Update fire wall2.",
            answer: {
              A: 'quest1.',
              B: 'question2.',
              C:'question3'

            }
          },


          8: {
            ques: " Update fire wall3.",
            answer: {
              A: 'quest1.',
              B: 'question2.',
              C:'question3'

            }
          },


          9: {
            ques: " When you go toilet, you are transferring some data, will you stop it and lock the computer?",
            answer: {
              A: 'Go toilet directly.',
              B: 'Stop the data transferring and lock your computer.',

            }
          },


          10: {
            ques: "When you outside with your workmate, your workmate is talking with some decision with you about your company, what should you do?",
            answer: {
              A: 'Go away.',
              B: 'Told you workmate it is not suitable.',
              C:' Talk with him together.'

            }
          },



          11: {
            ques: "When you print some pdf, how could you deal with the file?",
            answer: {
              A: 'Just put it in the public computer',
              B: 'Move to trashbin.',
              C:'move to trash and delete'

            }
          },


          12: {
            ques: " You take your own disk to computer, you need to copy some file from the disk.\n" +
                "How could you do that?",
            answer: {
              A: 'Use your company computer directly.',
              B: 'open your own computer and transfer data.',
              C:'question3'

            }
          },


        },
      }
    },
    methods:{
      show(qindex) {
        this.curr_q_index = this.curr_q_index+1;
      }
    }
  }
</script>

<style scoped>

</style>