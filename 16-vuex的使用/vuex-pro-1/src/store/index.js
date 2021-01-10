
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)
// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000
  },
  // 使用mutations修改state中的值,可以通过devtool跟踪谁修改的
  mutations: {

  },
  // 异步请求时,使用action修改
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

// 3. 导出store独享
export default store
