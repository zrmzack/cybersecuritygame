import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Eagle from 'eagle.js'
import jquery from "jquery"
// import animate.css for slide transition
import 'animate.css'
global.jquery=global.$=jquery()
Vue.use(Eagle)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router

}).$mount('#app')
