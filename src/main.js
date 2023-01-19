import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//导入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
