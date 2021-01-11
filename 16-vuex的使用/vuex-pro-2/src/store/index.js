
import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from './mutations-types'
// 1. 安装插件
Vue.use(Vuex)
// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'acedar', age: 18},
      {id: 111, name: 'aaa', age: 20},
      {id: 112, name: 'bbb', age: 22}
    ]
  },
  // 使用mutations修改state中的值,可以通过devtool跟踪谁修改的
  mutations: {
    // 通过定义类型常量来使用， 推荐使用该方式
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 可以传递外部参数
    incrementCount(state, count) {
      // 提交方法1获取的值为实际提交的参数
      // this.$store.commit('incrementCount', count)
      // state.counter += count

      // 提交方法2获取的值为对象
      // this.$store.commit({
      //   type: 'addStu',
      //   count: count})
      // 此时count为对象
      state.counter += count.count

    },
    addStu(state, stu) {
      // 提交方法1获取的值为实际提交的参数
      // this.$store.commit('addStu', stu)
      // state.students.push(stu)

      // 提交方法2
      // this.$store.commit({
      //   type: 'addStu',
      //   stu: stu})
      // 此时的参数为对象
      state.students.push(stu.stu)
    },
    updateStu(state) {
      // 不会实时响应
      // state.students[0]['addr'] = 'xx'
      // 删除属性同样不是实时响应
      // delete state.students.age

      // 实时响应
      Vue.set(state.students[0], 'addr', 'xx')
      // 删除后实时响应
      Vue.delete(state.students, 'age')
    }
  },
  // 异步请求时,使用action修改
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    ageBigThan(state) {
      return state.students.filter(s => s.age >=20)
    },
    // getter中调用getters
    ageBigThanLen(state, getters) {
      return getters.ageBigThan.length
    },
    // 传递参数的getters属性
    ageBigThanAge(state) {
      return function (age) {
        return state.students.filter(s => s.age >=age)
      }
    },
  },
  modules: {

  }
})

// 3. 导出store独享
export default store
