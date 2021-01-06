import Vue from 'vue'
import App from './App'
// import router from './router'   可省略具体文件名
// import router from './router/index.js'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 导入路由
  router,
  render: h => h(App)
})
