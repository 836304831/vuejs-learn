export default {
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
  }
  