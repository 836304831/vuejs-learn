export default {
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
  