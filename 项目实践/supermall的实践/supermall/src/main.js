import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import VueLazyload  from "vue-lazyload";

import router  from "./router"
import store from "@/store";
import toast from "@/components/common/toast"

Vue.config.productionTip = false


Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)

FastClick.attach(document.body)

// 使用懒加载方式
Vue.use(VueLazyload, {
  loading: require('./assets/imgs/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
