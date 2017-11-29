// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
// 从版本2.6.0开始，需要手动引入swiper.css！否则轮播图样式出不来！
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
import RegionPicker from 'vue-region-picker'
import CHINA_REGION from 'china-area-data'
import router from './router'
import store from './store'
import axios from 'axios'  
import 'font-awesome/css/font-awesome.css'
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)

Vue.use(RegionPicker, {   
  region: CHINA_REGION,  
  vueVersion: 2
})
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  VueAwesomeSwiper,
  store,
  template: '<App/>',
  components: { App }
})
