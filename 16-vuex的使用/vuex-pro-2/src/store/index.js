
import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from './mutations-types'
// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
// 2.1 定义模块状态
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // actions是异步操作的函数定义集合
    aUpdateName(context) {
      // 模块中的context只操作本模块中的功能
      setTimeout(() => {
        context.commit('updateName', 'wangwu') 
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + "-full"
    },
    fullName2(state, getters) {
      // 引入本module下的属性
      return getters.fullName + '222'
    },
    fullNam3(state, getters, rootSatate) {
      return getters.fullName2 + '-' + rootSatate.counter
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'acedar', age: 18},
      {id: 111, name: 'aaa', age: 20},
      {id: 112, name: 'bbb', age: 22}
    ],
    // 测试异步更新
    upValue: 10
  },
  // 使用mutations修改state中的值,可以通过devtool跟踪谁修改的
  mutations: {
    // 不能在mutation中执行异步操作，否则无法很好的跟踪数据变化
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
    },
    updateInfo(state) {
      state.upValue = 20
    }
  },
  // 异步请求时,使用action修改
  actions: {
    // 默认参数context， 为Vuex.Store对象
    aUpdateInfo(context, payload) {
      
      // ********  回调通知方法1： 通过传递回调函数，执行完后调用回调函数通知 ***************
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(payload)
      //   // 打印参数
      //   console.log(payload.params)
      //   // 调用回调函数
      //   payload.success()

      // }, 1000)

      
      // 回调通知方法2：通过promise解决
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('异步更新结束')
        }, 1000)
      }) 
    }
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
  
  //  Vuex.Store只能创建一个对象，但涉及到大项目中，全部组件共享一个state就可能导致数据混乱，为此引入modules
  // 以模块的形式分别定义state，mutation，action和getters等方法。
  modules: {
    // 定义一个模块
    a: moduleA
  }
})

// 3. 导出store独享
export default store
