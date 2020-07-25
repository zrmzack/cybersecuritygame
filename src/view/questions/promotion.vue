<template>
    <div>
        <h1>
            Congrationlations, now you are XXXX. Next Chapter is coming. You will be outside for business.
            Also, be careful about cybersecurity.
        </h1>
        <button @click="next"></button>
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

</style>