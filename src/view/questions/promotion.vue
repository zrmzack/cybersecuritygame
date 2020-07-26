<template>
    <div class="center-in-center">
        <div class="show">
        <h1>
            Congrationlations, now you are XXXX. Next Chapter is coming. You will be outside for business.
            Also, be careful about cybersecurity.
        </h1>
        </div>
        <el-button type="info" round @click="next" class="next"> Next</el-button>
    </div>

</template>

<script>
    export default {
        name: "promotion",
        created() {
            console.log(this.$route.query.username)
            this.username = this.$route.query.username
            this.money = this.$route.query.money
        },
        data() {
            return {
                username: '',
                position: 'test',
                money: 0,
            }
        },
        methods: {
            next: function () {
                this.$router.push({
                    path: '/aliPay',
                    query: {
                        username: this.username,
                        money: this.money,
                    }
                })
            }
        },
        mounted: function () {
            this.getPosition()
        }

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
        line-height:60px;





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