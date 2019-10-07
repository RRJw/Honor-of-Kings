import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
import './style.scss'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Card from './components/Card.vue'
Vue.component('card', Card)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api/'
})

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
