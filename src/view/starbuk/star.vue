<template>
  <div>
    <article class="wrapper">
      <nav class="nav">
        <nav-container>
					<span slot="navbody">
						<section class="navbody-menu body">
							<div class="accountbtn menubtn account">
								<h1>Join now or Sign in 🌟 </h1>
								<ul>
									<li>
										<a class="{'active-menu':curActive == 'login'}">
											Sign in
										</a>
									</li>
									<li>
										<a class="{'active-menu':curActive == 'register'}">
											Join now
										</a>
									</li>
									<li>
										<a class="{'active-menu':curActive == 'starbucks-rewards'}">
											about Starbucks
										</a>
									</li>
								</ul>
							</div>
						</section>
					</span>
        </nav-container>

      </nav>
      <article class="content" v-if="lgMedia || !show_menu_bol">
        <section class="account-welcome">
          <a>
            <img src="../../assets/images/st.jpg" alt="">
          </a>
        </section>
        <section class="account-login-actions">
          <div class="form-login qrcode-login">
            <div>
              <div class="login-switcher switch-to-form">
                <p>
                  <span>login</span>
                </p>
              </div>
            </div>
            <component v-bind:is="view"></component>
          </div>
        </section>
        <section class="account-join">
          <div class="wrapper">
            <h2>
              <span>Join </span>
            </h2>
            <p>
              <span>Join My Starbucks Rewards® to earn free drinks, get free syrups and shots, order ahead with your phone, and more.</span>
            </p>
            <div class="create-account">
              <a class="register button btn-bigger">
                <span>Join now</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </article>
  </div>
</template>

<script>

import '@/assets/css/bootstrap.min.css'
import '@/assets/css/swiper.min.css'
import '@/assets/css/init.css'
import '@/assets/css/styles.css'
import '@/assets/css/account.css'
import NavContainer from '@/components/navContainer'
import FormLogin from '@/components/formLogin'


export default {
  name: 'account',
  created() {
    this.username = this.$route.query.username
    this.money = this.$route.query.money
    this.position = this.$route.query.position
    this.Property = this.$route.query.Property
    this.Bag = this.$route.query.Bag
    this.car = this.$route.query.car
    this.house = this.$route.query.house
  },
  metaInfo: {
    title: '星享俱乐部',
    titleTemplate: '%s | 星巴克',
    meta: [
      {
        name: 'keywords',
        content: ''
      },
      {
        name: 'description',
        content: '星享俱乐部'
      }
    ]
  },
  data() {
    return {
      show_menu_bol: false,
      lgMedia: window.matchMedia('(min-width: 1025px)').matches,
      curActive: 'login',
      view: 'FormLogin',
      showFormLogin: true,
      username: '',
      Bag: '',
      car: '',
      house: '',
      position: 'test',
      money: 0,
      Property: 0,
    }
  },

  components: {
    NavContainer: NavContainer,
    FormLogin: FormLogin,
  },
  methods: {
    submit: function () {
      this.$router.push({
        path: '/starWrong',
        query: {
          username: this.username,
          Bag: this.Bag,
          car: this.car,
          house: this.house,
          money: this.money,
          position: this.position,
          Property: this.Property
        }
      })
    }
  }
}

</script>
