export default {
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
  }
