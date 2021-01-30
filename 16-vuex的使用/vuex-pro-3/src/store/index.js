
import Vue from 'vue'
import Vuex from 'vuex'


import moduleA from './modules/moduleA'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
// 2.1 定义模块状态
const state =  {
  counter: 1000,
  students: [
    {id: 110, name: 'acedar', age: 18},
    {id: 111, name: 'aaa', age: 20},
    {id: 112, name: 'bbb', age: 22}
  ],
  // 测试异步更新
  upValue: 10
}

const store = new Vuex.Store({
  state,
  // 使用mutations修改state中的值,可以通过devtool跟踪谁修改的
  mutations,
  // 异步请求时,使用action修改
  actions,
  getters,
  
  modules: {
    // 定义一个模块
    a: moduleA
  }
})

// 3. 导出store独享
export default store
