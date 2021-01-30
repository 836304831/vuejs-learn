import {INCREMENT} from './mutations-types'

export default {
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
  }
  